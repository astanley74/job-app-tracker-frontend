import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import NavBar from './Navbar'

const About = (props) => {

    const handleOnClick = event => {
        props.history.push('/home')
    }
    return(
        <div>
        <NavBar/>
        <Card>
            <Card.Header className="text-center">About</Card.Header>
            <Card.Body>
                <Card.Title className="text-center">What Is Job Tracker?</Card.Title>
                <Card.Subtitle>
                    Job Tracker is an app that allows you to add job applications to your profile in order to keep track
                    of all of your current job applications. It allows you to update your job apps to monitor your progress with your
                    prospective companies. 
                </Card.Subtitle>
                <Card.Text>

                </Card.Text>
                <Button variant="primary" onClick={() => handleOnClick()}>User Home</Button>
            </Card.Body>
            <Card.Footer className="text-center">
                <Card.Link href="#https://github.com/astanley74">Github: https://github.com/astanley74</Card.Link>
            </Card.Footer>
        </Card>
        </div>
    )
}

export default withRouter(About)