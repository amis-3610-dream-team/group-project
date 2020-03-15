import React from "react";
import "./Home.css";
import plane from "../../Assets/Plane.svg";
import planet from "../../Assets/Planet-Plane-Planner.svg";

export default function Home() {
    return (
        <div className="Home">
            <div className="Lander">
                <h1>Home</h1>
                <p>Welcome to Twin Aviation.</p>
                <img id="plane" src={plane}></img>
                <img id="planet" src={planet}></img>
            </div>
        </div>
    );
}