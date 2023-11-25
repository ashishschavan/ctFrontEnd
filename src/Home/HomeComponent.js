import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from "axios";

const HomeComponent = (props) => {
    const userDetails = useSelector((state) => state.userDetails);

    const navigate = useNavigate();
    useEffect(() => {
        if (!userDetails) {
            navigate('/login');
        }
        else{
            axios.post("https://api.tookanapp.com/v2/find_customer_with_phone", {
                    api_key: "2b997be77e2cc22becfd4c66426ef504",
                    customer_phone: "9897416008"
                })
                    .then((response) => {
                        if(!response)
                        {
                            navigate("profile");
                        }
                    });
        }
    }, [userDetails]);
    return (
        <div>
            <p>home</p>
            {userDetails
                && <p>user logged in</p>}
        </div >

    )
}
export default HomeComponent;