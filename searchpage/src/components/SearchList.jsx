
import UserDetails from "./UserDetails";
import '../Styles/SearchList.styles.css';

const SearchList = ({results}) => (

    <div className="name-list">
        {
        results.map((foundname) => {
            return (
                <div key={foundname.ggId}>
                <UserDetails foundname ={foundname}/>
                </div>
            );
      })}
    
    </div>
    
);

export default SearchList;