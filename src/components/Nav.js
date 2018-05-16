import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow p-3 mb-5 bg-white rounded">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" to="">Salladsbaren</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/order">Order</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Menu">Menu</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/favorit">favoriter</NavLink>
      </li>
    
    </ul>
  </div>
</nav>
        );
    }
}

export default Nav;