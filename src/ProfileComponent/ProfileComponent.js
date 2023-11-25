import React, { useState, useEffect, useContext } from "react";
import { DataContext } from '../DataContext';
import { useNavigate } from 'react-router-dom';
import './ProfileComponent.css';
import axios from "axios";
import { useSelector } from 'react-redux';

function ProfileComponent() {

    const userDetails = useSelector((state) => state.userDetails);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userDetails) {
            navigate('/login');
        }
    }, [userDetails]);

    const [formData, setFormData] = useState({
        api_key: "eaac56717958fa6664a9c5a0a29a43810a30fcda90be26a3e023b2f70f9ffa05",
        user_type: 0,
        name: "Manish",
        phone: "+919876543210",
        email: "manish.sharma@jungleworks.com",
        address: "CDCL, Madhya Marg, 28B, Sector 28B, Chandigarh, India",
        latitude: 30.7188978,
        longitude: 76.81029809999995
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can send formData to an API or perform other actions here)
        console.log(formData);
        axios.post("https://private-anon-c8bbe46354-tookanapi.apiary-mock.com/v2/customer/add", {
            api_key: "eaac56717958fa6664a9c5a0a29a43810a30fcda90be26a3e023b2f70f9ffa05",
            user_type: 0,
            name: "Manish",
            phone: "+919876543210",
            email: "manish.sharma@jungleworks.com",
            address: "CDCL, Madhya Marg, 28B, Sector 28B, Chandigarh, India",
            latitude: 30.7188978,
            longitude: 76.81029809999995
        })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <form className="main-div-profile-form" onSubmit={handleSubmit}>
            <div class="form-group">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    class="form-control mt-4"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    class="form-control mt-4"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control mt-4"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    class="form-control mt-4"
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary mt-4" onClick={handleSubmit} type="submit">Update Profile</button>
        </form>
    );
}

export default ProfileComponent;
