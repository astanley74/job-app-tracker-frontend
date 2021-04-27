import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';

const JobAppCard = (props) => {

    const { job_app } = props

        return(
            <div>
                <Card className="text-left" bg="dark" text="light">
                    <Card.Header className="text-center">{job_app.position}</Card.Header>
                    <Card.Body>
                        <Card.Title>{job_app.company_name}</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {job_app.date}
                    </Card.Footer>
                </Card>
            <br/>
            </div>
        )
    
}

export default connect()(JobAppCard)