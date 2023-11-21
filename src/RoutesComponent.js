import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginComponent from "./LoginComponent/LoginComponent";
import HomeComponent from "./Home/HomeComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";

const RoutesComponent = () => {

    return (

        <Routes>
            
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/profile" element={<ProfileComponent />}></Route>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="/" element={<HomeComponent />}></Route>

        </Routes>
    )
}
export default RoutesComponent;





