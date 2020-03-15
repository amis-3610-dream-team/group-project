import React, { Component } from 'react';
import './Login.css';
import Backdrop from '../Backdrop/Backdrop';
import LoginContainer from './Login';

export default class Login extends Component {
    state = {
        loginOpen : false
    };

    loginClickHandler = ({onClick}) => {
        this.setState((prevState) => {
            return {
                loginOpen: !prevState.loginOpen
            };
        });
    }

    backdropClickHandler = () => {
        this.setState({loginOpen: false});
    };
    
    render() {
        let backdrop;
        let loginContainer;

        if (this.state.loginOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
          loginContainer = <LoginContainer/>
        };
        
    
        return (
          <div>
            <button onClick={() => this.loginClickHandler(this.state)}>Login</button>
            {loginContainer}
            {backdrop}
            </div>
        );

    }
}

