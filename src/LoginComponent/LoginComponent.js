import React, { useContext } from 'react';
import './LoginComponent.css';
import { authentication } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../DataContext';
import { useState, useEffect } from 'react';
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../actions';

function LoginComponent() {
    const dispatch = useDispatch();
    const [phoneNumber, setphoneNumber] = useState();
    const [otp, setOTP] = useState();
    const [isOTPSent, setIsOTPSent] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useContext(DataContext);

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(authentication, 'recaptcha-form', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        }, authentication);
    }
    const requestOPT = () => {
        console.log(phoneNumber);
        // if (phoneNumber.length = 12) {
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;

        console.log(phoneNumber);
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setIsOTPSent(true);
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
        // }
    }

    const verifyOTP = () => {
        if (otp.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                localStorage.setItem('loggedIn',true);
                axios.post("https://private-anon-c8bbe46354-tookanapi.apiary-mock.com/v2/find_customer_with_phone", {
                    api_key: "2b997be77e2cc22becfd4c66426ef504",
                    customer_phone: phoneNumber
                })
                    .then((response) => {
                        login(response);
                    });


                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
        }
    }


    const login = (userData) => {
        dispatch(setUserDetails(userData));
        navigate('/home');        
    };



    signInWithPhoneNumber(authentication, phoneNumber)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
        }).catch((error) => {
        });
    return (
        <div className="form-outline main-div-login">
            <input type="text" pattern="[1-9]{1}[0-9]{9}" required id="typePhone" placeholder="Enter Phone Number" className="form-control" onChange={e => setphoneNumber(e.target.value)} />
            <button type="submit" onClick={requestOPT} className="btn btn-primary mb-2 mt-3">Submit</button>

            {isOTPSent && <div className='mt-4'>
                <input type="input" placeholder='Enter OTP' id="typeOTP" className="form-control" onChange={e => setOTP(e.target.value)} />
                <button type="submit" onClick={verifyOTP} className="btn btn-primary mb-2 mt-3">Submit OTP</button>
            </div>
            }

            <div id='recaptcha-form'></div>
        </div>
    );
}

export default LoginComponent;
