import React from 'react';
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaDev,
  FaBehanceSquare,
} from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="nav-footer">
      <FaTwitterSquare />
      <FaGithubSquare />
      <FaLinkedin />
      <FaInstagramSquare />
      <FaDev />
      <FaBehanceSquare />
    </footer>
  );
};

export default Footer;
