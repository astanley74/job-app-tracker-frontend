import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import React from 'react';

const Header = (props) => {

    const handleOnClick = event => {
        props.history.push('/login')
    }

    return (
        <Jumbotron>
        <h1>Welcome To Job Tracker!</h1>
        <p>
            An application that allows you to track the progress of all of your current job applications.
        </p>
        <p>Please Log In or Sign Up Below</p>
        <p>
            <Button onClick={() => handleOnClick()}variant="primary">Log In/Sign Up</Button>
        </p>
    </Jumbotron>
    )
}

export default withRouter(Header)