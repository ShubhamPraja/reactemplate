import React from 'react'
import { NavLink } from 'react-router-dom';

const NevBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <NavLink className="navbar-brand bold" to="/" ><h1>Shubham</h1></NavLink>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                  <li className="nav-item">
                    <NavLink ClassName="menu-active" className="nav-link" to="/">Home </NavLink>
                  </li>
                  <li className="nav-item" >
                    <NavLink exact activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu-active" className="nav-link" to="/service">Service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink>
                  </li>

                </ul>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}


export default NevBar;
