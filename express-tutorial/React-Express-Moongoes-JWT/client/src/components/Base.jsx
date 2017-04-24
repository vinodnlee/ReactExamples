import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div className="container">
    <nav className="navbar navbar-inverse">
    <div className="navbar-header">
    <IndexLink to="/"><a className="navbar-brand" href="#">React Express Mongo</a></IndexLink>
  </div>
  <div className="collapse navbar-collapse js-navbar-collapse">
  <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          {Auth.isUserAuthenticated() ? (
              <Link to="/logout"><button className="btn btn-success">Log out</button></Link>
          ) : (
              <Link to="/login"><button className="btn btn-success">Log in</button></Link>
          )}
        </li>
      </ul>
  </div>
  </nav>
    { /* child component will be rendered here */ }
    {children}
  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
