import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </div>
);

export default Header;