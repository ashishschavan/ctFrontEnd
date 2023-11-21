import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import { DataContext } from '../DataContext';

import './HeadNavComponent.css'
const HeadNavComponent = () => {

  const navigate = useNavigate();
  const { user, setUser } = useContext(DataContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authenticatedUser'); // Clear user data from localStorage
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light ">
      <div className="container-fluid d-flex  align-items-center">
        <div className='col-2 logo-div' >
          <Link className="navbar-brand" to="/">
            <h3>Project Name</h3>
          </Link>
        </div>
        <div className="collapse navbar-collapse justify-content-end col" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
            </li>
            {user ?
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" onClick={logout}>Log Out</Link>
              </li> : <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default HeadNavComponent;





