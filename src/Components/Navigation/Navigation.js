import React, {Component} from "react";
import "./Navigation.css";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import PageList from './PageListCompiler';

//Here is where we update Our Navigation Links
//Home is not included due to proper Home routing of root (/)
const pagesList = ["LogBook", "MySchedule", "Reserve", "Weather"];



export default class Navigation extends React.Component {
render() {
    return(
      <div>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Plane Planner</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
             <PageList pagesList={pagesList} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
}
}