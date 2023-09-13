import '../Styles/RecentSearch.styles.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import placeholderImg from '../assets/placeholderimage.png';

const RecentSearch = () => {

    const [recent, setRecent] = useState([]);

    const fetchRecent = () => {
      fetch(`https://torre-search-backend.onrender.com/user/getSavedUsers/`).then((response) => response.json()).then((recentlist) => {
        setRecent(recentlist)
    }, []);
    }

    useEffect(() => {
      fetchRecent();
    }, [])

    return (
      <div className= "recent-list">
      {
      recent.map((user) => {
          return (
              <div key={
                user._id
              }>
                  <Link className="userlink"
            to={
                `https://torre.ai/${user.username}`
        }>

            <div className="r-box-container">
                {
                user.imageUrl ? (
                    <img alt={
                            `${user.full_name}`
                        }
                        src={
                            `${user.imageUrl}`
                        }
                        width={
                            `${45}`
                        }
                        height={
                            `${45}`
                        }/>
                ) : (
                    <img alt={
                            `${user.full_name}`
                        }
                        src={
                            `${placeholderImg}`
                        }
                        width={
                            `${45}`
                        }
                        height={
                            `${45}`
                        }/>
                )
            }
                <div className='name-box'>
                    <h2>{user.full_name}</h2>
                    <p>{user.professionalHeadline}</p>
                </div>
            </div>
        </Link>
              </div>
          );
      })
  } </div>
    )

}

export default RecentSearch;
