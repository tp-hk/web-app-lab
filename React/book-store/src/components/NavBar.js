import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ title = 'Replace This Title', routes = {} }) => {
  let menuItems = null;

  if (Object.keys(routes).length > 0) {
    menuItems = Object.keys(routes).map((key, i) => {
      return <li key={i}><Link to={key}>{routes[key]}</Link></li>
    });
  } else {
    menuItems = <li key={0}><Link to='replaceThisRoute'>Replace This Item</Link></li>
  }

  return (
    <div className='container'>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>{title}</a>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              {menuItems}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;