import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>JobTracker</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/add-job">Add Application</Link>
                    <Link to="/logout">Logout</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar