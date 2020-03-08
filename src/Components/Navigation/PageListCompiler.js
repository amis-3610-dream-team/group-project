import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function PageList(props) {
    const strings = props.pagesList;
    const listItems = strings.map((string) =>
     <Nav.Link href={"/" + string}> {string} </Nav.Link>);

    return (
        
        <NavItem>
            <Nav.Link href="/">Home</Nav.Link>
            {listItems}
        </NavItem>
    )
}