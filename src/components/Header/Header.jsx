import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Lucas</div>
      <div className="menu-link">
        <ul>
          <li>Blog</li>
          <li>Contato</li>
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
