import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { SearchBar } from "./searchBar/SearchBar";



export const Navbar=()=>{
    const navigate=useNavigate();
    const [showMediaIcons, setShowMediaIcons] = useState(false);
const goTo=()=>{
  navigate(localStorage.getItem("role")==="user"?"/user":"/admin")
}
const Logout=()=>{
    localStorage.clear();
    navigate('/')
}
    return(
        <>
<nav className="main-nav">
{/* 1st logo part  */}
<div className="logo">
  <h2>
    <span>F</span>raud
    <span>D</span>etection
  </h2>
</div>

{/* 2nd menu part  */}
<div
  className={ 
    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
  }>
  <ul>
    <li>
      <a onClick={goTo}>Home</a>
    </li>
    <li>
      <NavLink to="/lead">Lead</NavLink>
    </li>
    <li>
      <NavLink to="/impression">Impression</NavLink>
    </li>
    <li>
      <NavLink to="/visits">Visits</NavLink>
    </li>
    <li>
    <button onClick={Logout}> logout</button>
    </li>
  </ul>
</div>

{/* 3rd social media links */}
<div className="social-media">
  <ul className="social-media-desktop">
    <li>
      <a
        href=""
        target="_next">
        
      </a>
    </li>
    <li>
        <SearchBar  className="instagram" />
    </li>
  </ul>

  {/* hamburget menu start  */}
  <div className="hamburger-menu">
    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
      <GiHamburgerMenu />
    </a>
  </div>
</div>
</nav>
            
        </>
    )
}


