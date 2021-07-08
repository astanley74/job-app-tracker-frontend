import React from 'react';
import {connect} from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import NavBar from './Navbar';

const JobAppView = (props) => {
    let job_app = props.job_apps.filter(job => job.id === parseInt(props.match.params.jobId))[0]
    console.log(job_app)
        return(
            <div>
            <NavBar/>
            <Card>
            <Card.Header>{job_app.company_name}</Card.Header>
            <Card.Body>
                <Card.Title>{job_app.position}</Card.Title>
                <Card.Text>
                    Notes: {job_app.notes}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {job_apps: state.user.job_applications}
}
export default connect(mapStateToProps)(JobAppView)