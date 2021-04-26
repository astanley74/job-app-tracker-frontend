import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchUsers } from '../actions/fetchUsers'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginCreateForm extends React.Component {

    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    handleOnChange = event => {

    }

    handleOnSubmit = event => {

    }

    render() {
        return (
            <div className="Login">
              <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="first_name"placeholder="First Name" onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label></Form.Label>
                    <Form.Control type="name" name="last_name" placeholder="Last Name" onChange={this.handleOnChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
              </Form>
            </div>
          );
    }

}

export default connect(null, { fetchUsers })(LoginCreateForm)