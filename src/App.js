import React, {Component} from "react";
import "./App.css";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Twin Aviation</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="/MySchedule">MySchedule</Nav.Link>
              <Nav.Link href="/Reserve">Reserve</Nav.Link>
              <Nav.Link href="/Weather">Weather</Nav.Link>
              <Nav.Link href="/LogBook">LogBook</Nav.Link>
              <Nav.Link href="/Logout">Logout</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      <Routes />
    </div>
    );
  }
}
