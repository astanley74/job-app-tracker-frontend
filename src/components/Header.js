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
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button onClick={() => handleOnClick()}variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
    )
}

export default withRouter(Header)