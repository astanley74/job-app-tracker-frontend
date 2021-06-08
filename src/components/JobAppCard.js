import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import EditJobApplicationInput from './EditJobApplicationInput';
import { deleteJobApplication } from '../actions/deleteJobApplication'
import JobAppView from './JobAppView'

class JobAppCard extends React.Component {

    constructor() {
        super()
        this.state = {
            editJob: false,
            favorite: false,
            addHeart: ""
        }
    }
    
    // handleFavorite = event => {
    //     this.setState({
    //         favorite: !this.state.favorite
    //     })
    //     if (this.state.favorite === true) {
    //         this.setState({
    //             addHeart: "<3"
    //         })
    //     } else {
    //         this.setState({
    //             addHeart: ""
    //         })
    //     }
    // }

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
            <Card.Header className="text-center">{job_app.position} - {job_app.company_name}</Card.Header>
            <Card.Body>
                {/* <Card.Title>{job_app.company_name}</Card.Title> */}
                <Card.Subtitle>
                    Stage: {job_app.current_stage}
                </Card.Subtitle>
            <Card.Body>
            <Card.Text>
                    Notes: {job_app.notes}
                    <br></br>
                    {/* Favorite: {this.state.addHeart} */}
                </Card.Text>
            </Card.Body>
                <Button variant="primary" onClick={this.handleOnClick}>Update</Button> <Button variant="danger" onClick={() => this.props.deleteJobApplication(job_app.id, job_app.user_id)}>Delete</Button>
                {/* <Button variant="primary" onClick={this.handleFavorite}>Favorite</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">
                {job_app.date_of_application}
            </Card.Footer>
        </Card>
    <br/> 
    {this.state.editJob && <EditJobApplicationInput job_app={job_app}/>}
    {this.state.showJob && <JobAppView job_app={job_app}/>}
    </div>
    )}

}

export default connect(null, { deleteJobApplication })(JobAppCard)