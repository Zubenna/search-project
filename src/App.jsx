import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import RecentSearch from './components/RecentSearch';
import Navigation from "./components/Navigation";

const App = () => {

    return(
      <Routes>
        <Route path='/' element={<Navigation />}>
         <Route index element={<Home />} />
         <Route path='/recent' element={<RecentSearch />} />
        </Route>
      </Routes>

    );
};

export default App;



// https://torre-search-backend.onrender.com  Production
// Development http://localhost:4050
