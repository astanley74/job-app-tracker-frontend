import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../components/Link.css'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand Link to ="/home">JobTracker</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/job-apps">Job Apps</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar