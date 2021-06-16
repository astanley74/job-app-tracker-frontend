import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { loginUser } from '../actions/loginUser'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class LogIn extends React.Component {

    constructor() {
      super()
      this.state = {
        email: "",
        password: "",
        showModal: true,
        isSubmitted: false
      }
    }

    handleOnChange = event => {
      this.setState({
          [event.target.name]: event.target.value
        })
      // console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.loginUser(this.state)
        this.setState({
            email: "",
            password: "",
            isSubmitted: true,
            showModal: false
        })
        this.props.history.push('/home')

    }

    close = () => {
        this.setState({showModal: false})
        this.props.history.push('/')
    }

    render() {
        return (
          <div>
            <Modal show={this.state.showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Login Or Sign Up!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleOnSubmit}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleOnChange}/>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
}

export default withRouter(connect(null, { loginUser })(LogIn))