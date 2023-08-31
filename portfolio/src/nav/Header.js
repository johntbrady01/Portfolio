import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar dark expand="md"
                style={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(2,2,2)",

                }} >
                <NavbarBrand tag={RRNavLink} to="/" >John Brady</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="App-Header" navbar >
                        <>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/resume">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/contact">Contact</NavLink>
                            </NavItem>
                        </>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}