import React from 'react';
import { Form, Modal, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { editJobApplication } from '../actions/editJobApplication';

class EditJobApplicationInput extends React.Component {
    constructor(){
        super()
        this.state = {
            company_name: "",
            date_of_application: "",
            position: "",
            application_status: true,
            current_stage: "",
            notes: "",
            user_id: 0,
            showModal: true,
            isSubmitted: false
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            application_status: true,
            user_id: this.props.user.id
          })
        console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.editJobApplication(this.state)
        this.setState({
            company_name: "",
            date_of_application: "",
            position: "",
            application_status: true,
            current_stage: "",
            notes: ""
        })
        this.setState({
            ...this.state, 
            isSubmitted: true})

    }

    close = () => {
        this.setState({showModal: false})
    }


    render() {
        return(
            <div>
            <Modal show={this.state.showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">Add Job Application</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleOnSubmit}>
                  <Form.Group controlId="formBasicCompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="name" name="company_name" placeholder="Company Name" value={this.state.company_name} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicDateOfApplication">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="name" name="date_of_application"placeholder="MM-DD-YYYY" value={this.state.date_of_application} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicPosition">
                      <Form.Label></Form.Label>
                      <Form.Control type="name" name="position" placeholder="Position" value={this.state.position} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicCurrentStage">
                      <Form.Label></Form.Label>
                      <Form.Control type="name" name="current_stage" placeholder="Current Stage" value={this.state.current_stage} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicNotes">
                      <Form.Label></Form.Label>
                      <Form.Control type="name" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={this.close}>
                      Submit
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
            </Modal>
            {/* {this.state.isSubmitted && <User/>} */}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default withRouter(connect(mapStateToProps, { editJobApplication })(EditJobApplicationInput))