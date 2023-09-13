import '../Styles/UserDetails.styles.css';
import placeholderImg from '../assets/placeholderimage.png';
import {Link} from "react-router-dom";

const UserDetails = ({foundname}) => {

    const {name, username, professionalHeadline, imageUrl} = foundname;


    // const runfunction = () => {
    //     console.log("Link was clicked")
    // }
   
    return (
        <Link className="userlink"   to={`https://torre.ai/${username}`}>

            <div className="name-container">
                {
                imageUrl ? (
                    <img alt={
                            `${name}`
                        }
                        src={
                            `${imageUrl}`
                        }
                        width={
                            `${45}`
                        }
                        height={
                            `${45}`
                        }/>
                ) : (
                    <img alt={
                            `${name}`
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
                    <h2>{name}</h2>
                    <p>{professionalHeadline}</p>
                </div>
                </div>
        </Link>
    )
}

export default UserDetails;
