import React from "react";
import "./../scss/Navbar.scss";
import Logo from "./../images/MyWays Logo@2x.png";
import IcondDown from "./../images/Path 2.svg";
import InstantReply from "./../images/Instant logo.png";
import Menu from "./../images/menu.svg";

const Navbar = ({ signinPopup, signupPopup }) => {
  return (
    <div className='navbar__container'>
      <nav className='navbar'>
        <img src={Logo} alt='Company Logo' className='navbar__img' />
        <input className='menu' type='checkbox' id='ham' />
        <label className='menu-label' htmlFor='ham'>
          <img className='menu-icon' src={Menu} alt='hamburger menu' />
        </label>

        {/* split-links */}
        <div className='navbar__split-links'>
          <li className='navbar__item'>
            <button onClick={signupPopup} className='navbar__link btn-signup'>
              Sign Up
            </button>
          </li>
          <li className='navbar__item'>
            <button
              onClick={signinPopup}
              className='navbar__link btn btn-green'>
              Login
            </button>
          </li>
        </div>
        {/* end of split-links */}

        {/* navbar-links */}
        <ul className='navbar__links'>
          <li className='navbar__item dropdown-box'>
            <button className='navbar__link'>For You</button>
            <img className='icon-down' src={IcondDown} alt='icon down' />
            <ul className='dropdown'>
              <li>Find matching internships</li>
              <li>Hire right talent</li>
              <li>Work from Home</li>
            </ul>
          </li>
          <li className='navbar__item instant-box'>
            <img
              className='icon-instant'
              src={InstantReply}
              alt='instant reply logo'
            />
            <button className='navbar__link'>Instant Reply</button>
          </li>
          <li className='navbar__item'>
            <button className='navbar__link'>Pricing</button>
          </li>
          <li className='navbar__item'>
            <button className='navbar__link'>About Us</button>
          </li>
          <li className='navbar__item disp'>
            <button onClick={signupPopup} className='navbar__link btn-signup'>
              Sign Up
            </button>
          </li>
          <li className='navbar__item disp'>
            <button
              onClick={signinPopup}
              className='navbar__link btn btn-green'>
              Login
            </button>
          </li>
        </ul>
        {/* end of navbar-links */}
      </nav>
    </div>
  );
};

export default Navbar;
