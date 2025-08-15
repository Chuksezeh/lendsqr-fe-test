import React from "react";
import "./Navbar.scss";
import { FaBars, FaRegBell } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import lendsqrLogo from "../../Images/Women-laughing.jpg";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {

    const BarsIcon = FaBars as React.ComponentType<{ size?: number }>;
    const BellIcon = FaRegBell as React.ComponentType<{ size?: number, className?: string }>;
    const ArrowIcon = MdArrowDropDown as React.ComponentType<{ size?: number }>;
    const SearchIcon = IoSearchOutline as React.ComponentType<{ size?: number }>;

    return (
        <header className="navbar-container">
            <div className="navbar-left">
                <button className="menu-btn" onClick={toggleSidebar}>
                    <BarsIcon size={20} />
                </button>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input className="search-input-navbar" type="text" placeholder="Search for anything" aria-label="search" />
                    <button type="submit">  <SearchIcon size={20}/></button> 
                </form>
                  <div className="mobile-dropdown"><img src={lendsqrLogo} className="image-profile-li" style={{width:"30px", height:"30px", borderRadius:"50px"}} /><ArrowIcon size={20}/> </div>
                 <ul className="navbar-menu">
                  <li className="" style={{textDecoration:"underline"}}>Docs</li>
                  <li><BellIcon size={20} /> </li>
                  <li  className="image-profile-li"> <img src={lendsqrLogo} className="image-profile-li" style={{width:"30px", height:"30px", borderRadius:"50px"}} /> </li>
                  <li className="" style={{width:"150px"}}>    Adedeji <ArrowIcon/>  </li>
            </ul>
            </div>
           
             
         
           
        </header>
    );
};

export default Navbar;