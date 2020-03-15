import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import PageList from './PageListCompiler';
import Airplane from '../../Assets/Airplane.svg';
import Login from '../Login/LoginButton';
import backdrop from "../Backdrop/Backdrop";

//Here is where we update Our Navigation Links
//Home is not included due to proper Home routing of root (/)
const pagesList = ["LogBook", "MySchedule", "Reserve", "Weather"];



export default class Navigation extends React.Component {
render() {
    return(
      <div>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand >
          <Link className="LogoName" to="/"><img id="Logo" src={Airplane}></img>Plane Planner</Link>
        </Navbar.Brand>
        <Navbar.Toggle id="collapse"/>
        <Navbar.Collapse >
          <div id="PageList">
          <Nav>
             <PageList id="PageList"  pagesList={pagesList} />
          </Nav>
          </div>
        </Navbar.Collapse>
        <Login loginHandler={this.loginHandler}></Login>
      </Navbar>
      </div>
    );
}
}