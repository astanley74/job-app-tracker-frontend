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
            <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>About</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary" onClick={() => handleOnClick()}>User Home</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>
    )
}

export default withRouter(About)