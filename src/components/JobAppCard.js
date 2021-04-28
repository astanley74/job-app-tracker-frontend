import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import EditJobApplicationInput from './EditJobApplicationInput';
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
            editJob: !this.state.editJob
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
                {job_app.date_of_application}
            </Card.Footer>
        </Card>
    <br/> 
    {this.state.editJob && <EditJobApplicationInput job_app={job_app}/>}
    </div>
    )}

}

export default connect(null, { deleteJobApplication })(JobAppCard)