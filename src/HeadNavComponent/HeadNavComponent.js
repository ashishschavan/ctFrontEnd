import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './HeadNavComponent.css'
const HeadNavComponent = () => {

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
                <Link className="nav-link active" aria-current="page" to="/rentout">Give On Rent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default HeadNavComponent;





