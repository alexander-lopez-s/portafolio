import { NavLink } from "react-router-dom";
import "../stylings/NavBar.css";
import { SlHome } from 'react-icons/sl';


const NavBar = () => {
  return (
    <div className="navigation">
      <nav>
        <ul className="menu">
          <li><NavLink to='/' ><SlHome/></NavLink></li>
          <li><NavLink to='/About' >About</NavLink></li>
          <li><NavLink to='/Resume' >Resume</NavLink></li>
          <li><NavLink to='/Projects' >Projects</NavLink></li>
          <li><NavLink to='*' >Home</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
