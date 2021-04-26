import React from 'react';
import {Card} from 'react-bootstrap'

const JobAppCard = (props) => {

        return(
            <div>
                <Card className="text-left" bg="dark" text="light">
                    <Card.Header className="text-center">{props.position}</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.company}</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{props.date}</Card.Footer>
                </Card>
            <br/>
            </div>
        )
    
}

export default JobAppCard