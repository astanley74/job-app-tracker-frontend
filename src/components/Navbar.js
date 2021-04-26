import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">JobTracker</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#job-apps">Job Apps</Nav.Link>
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