import React, { useEffect, useState } from 'react';
import {
    useNavigate,
  } from "react-router-dom";
import '../Styles/App.css';
import Skrate from '../Styles/Skrate.png';
import Vector from '../Styles/Vector.png';
import Loginimage from '../Styles/Loginimage.png';
import {
    authUser
} from './../helpers/auth';



const Login = (props) =>{
    let navigate = useNavigate();
    const onSignInClick = async (e) =>{
        await authUser();
        navigate('/dashboard')
    }
    return (
        <div className="home-container">
            <img id="logo" src={Skrate} alt='logo'/>
            <img id="right-top-banner" src={Vector} alt='right-top-banner'/>
            <img id="left-bottom-banner" src={Loginimage} alt="right-bottom-clipart"/>
            <div className='left-container'>
                <div className='heading'>Welcome Back to Skrate!! </div>
                <div className='button' onClick={(e)=>onSignInClick(e)}>Sign In with Google</div>
            </div>
        </div>    
    )
}
export default Login;
