import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
        <div className='banner'>
            <h1 className='title'>Dirt<span className='title-r'>r</span></h1>
          <div className='header-right'>
              <h1 className="saved-page-button">Favorites</h1>
            <div className='account-section'>
              <h1 className='welcome-user'>Welcome, poopy </h1>
                <button className='sign-out'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header