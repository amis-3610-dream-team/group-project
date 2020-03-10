import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <div>
            <div className="Login">
                <div id="spacer"></div>
                <h1>Login</h1>
                <form>
                    <input id="Username" type="text" placeholder="Username"></input>
                    <br></br>
                    <input id="Password" type="password" placeholder="Password"></input>
                    <br></br>
                    <button id="Submit" type="submit">Submit</button>

                </form>
            </div>
        </div>
    );
}