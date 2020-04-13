import React from 'react';
import {Link} from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h2 className="main-navigation__title">
        <Link to="/">Happened</Link>
      </h2>
      <nav>
        <NavLinks/>
      </nav>
    </MainHeader>
  )
};

export default MainNavigation;