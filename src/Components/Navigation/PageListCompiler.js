import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Navigation.css';

export default function PageList(props) {
    const strings = props.pagesList;
    const listItems = strings.map((string) =>
     <Nav.Link id="inline"  href={"/" + string}><button className="bubble">{string}</button></Nav.Link>);

    return (
        
        <NavItem >
            <Nav.Link id="inline" href="/"> <button className="bubble">Home</button></Nav.Link>
            {listItems}
        </NavItem>
    )
}