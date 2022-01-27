import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import LogoSvg from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-navbar">
        <Link to="/" className="header-link">
          <img src={LogoSvg} alt="Logo" />
        </Link>
      </div>
      <div className="menu-link">
        <ul>
          <Link to="/about" className="header-link">
            Sobre
          </Link>
          <Link to="/blog" className="header-link">
            Blog
          </Link>
        </ul>
        {/* <div className="lang">
          <div className="en">EN</div>
          <div className="pt">PT</div>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
