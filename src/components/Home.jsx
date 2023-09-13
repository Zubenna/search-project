import {useState} from "react";
import SearchList from "./SearchList";
import { FaSearch } from "react-icons/fa";
import "../Styles/Home.styles.css";

const Home = () => {
    const [isShown, setIsShown] = useState(false);
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch(`https://torre-search-backend.onrender.com/user/searchUser/${value}`).then((response) => response.json()).then((namelist) => {
            const data = namelist.results;
            setResults(data)
        });
       
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
        setIsShown(true);
    };

      const handleInputClick = (event) => {
        event.stopPropagation();
        if (isShown === false) {
            setIsShown(true);
        }
        setIsShown(true);
      };

      const handleMouseClick = (event) => {
        event.stopPropagation();
        if (isShown === true) {
            setIsShown(false);
        }
        setIsShown(false);
      }

    return (
        <div className="home" onClick={handleMouseClick}>
          <div className="input-wrapper" >
          <FaSearch id="search-icon" />
            <input placeholder="Search Name..." type="search" 
                value={input}
                onChange={
                    (event) => handleChange(event.target.value)
                }
                onClick={handleInputClick}
                />
            </div>
            {isShown && (<div>
            <SearchList results={results} />
            </div>
            )}
        </div>
    );
}

export default Home;
