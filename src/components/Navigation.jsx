import {Outlet, Link} from 'react-router-dom';
import '../Styles/Navigation.styles.css';

const Navigation = () => {
    return (
        <div className='nav-box'>
            <div className='menu-container'>
                <Link className='btn-container' to="/">
                    <div>
                      Search Name
                    </div>
                </Link>
                <Link className='btn-container' to='/recent'>
                    <div>
                    Recent Searches
                    </div>
                </Link>
            </div>
            <Outlet/>
        </div>
    )
}


export default Navigation;
