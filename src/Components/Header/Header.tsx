import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
        <div className='banner'>
          <h1 className='title-1'>Sport<span className='title-2'>Trivia</span></h1>
        </div>
      </div>
    )
}

export default Header