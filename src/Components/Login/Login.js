import React from 'react';
import './Login.css';
import logo from '../../Assets/Airplane.svg';

const LoginContainer = props => (
    <div className="LoginContainer">
        <img src={logo} />
        <div className="loginItems">
            <div id="login">Login</div>
            <input id="username" className="loginItems" placeholder="Username"></input>
            <br/>
            <input id="password" className="loginItems" type="password" placeholder="Password"></input>
            <br/>
            <button id="loginButton" className="loginItems" type="submit">Submit</button>
        </div>
            <button type="button">Create Account</button>
            <button>Forgot Password</button>

    </div>
);
export default LoginContainer;