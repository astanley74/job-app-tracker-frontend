import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditJobApplicationInput from './EditJobApplicationInput';
import User from './User'
import { deleteJobApplication } from '../actions/deleteJobApplication'

class JobAppCard extends React.Component {

    constructor() {
        super()
        this.state = {
            editJob: false
        }
    }

    handleOnClick = event => {
        this.setState({
            editJob: true
        })
    }

    render() {
        const { job_app } = this.props

        return(
        <div>
        <Card className="text-left" bg="dark" text="light">
            <Card.Header className="text-center">{job_app.position}</Card.Header>
            <Card.Body>
                <Card.Title>{job_app.company_name}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="danger" onClick={this.handleOnClick}>Edit</Button> <Button variant="danger" onClick={() => this.props.deleteJobApplication(job_app.id, job_app.user_id)}>Delete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                {job_app.date}
            </Card.Footer>
        </Card>
    <br/> 
    {this.state.editJob && <EditJobApplicationInput/>}
    </div>
    )}

}

export default connect(null, { deleteJobApplication })(JobAppCard)