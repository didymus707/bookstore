import React from 'react';
import { GoPerson } from 'react-icons/go';
// import { IconContext } from 'react-icons/lib';

const styles = {
  border: '1px solid #e8e8e8',
  borderRadius: '50%',
  color: '#0290ff',
  padding: '14px',
};

const Header = () => (
  <nav className="nav">
    <ul className="list">
      <li>Bookstore CMS</li>
      <li>BOOKS</li>
      <li>CATEGORIES</li>
    </ul>
    <div className="icon">
      <GoPerson style={styles} />
    </div>
  </nav>
);

export default Header;
