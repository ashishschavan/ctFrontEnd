import React, { useState, useEffect, useContext } from "react";
import { DataContext } from '../DataContext';
import { useNavigate } from 'react-router-dom';

const HomeComponent = (props) => {
    const { user} = useContext(DataContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            {console.log(user)}
            {user
                && <p>user logged in</p>}
        </div >

    )
}
export default HomeComponent;