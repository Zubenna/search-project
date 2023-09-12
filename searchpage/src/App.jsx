import {useState} from "react";
import SearchList from "./components/SearchList";
import { FaSearch } from "react-icons/fa";
import "./App.css";

const App = () => {
    const [isShown, setIsShown] = useState(false);
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch(`http://localhost:4050/user/searchUser/${value}`).then((response) => response.json()).then((namelist) => {
            const data = namelist.results;
            setResults(data)
        });
       
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

      const handleMouseOver = () => {
        setIsShown(true);
      };

    return (
        <div className="App">
          <div className="input-wrapper" >
          <FaSearch id="search-icon" />
            <input placeholder="Search Name..." type="search" 
                value={input}
                onChange={
                    (event) => handleChange(event.target.value)
                }
                onMouseOver={handleMouseOver}
                />
            </div>
            {isShown && (<div>
            <SearchList results={results} />
            </div>
            )}
        </div>
    );
}

export default App;
