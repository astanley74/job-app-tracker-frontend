import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addUser } from '../actions/addUser'
import { connect } from 'react-redux';

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
        this.setState({
            [event.target.name]: event.target.value
          })
        console.log(this.state)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            first_name: "",
            last_name: "",
            email: ""
        })
    }

    render() {
        return (
            <div className="Login">
              <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="first_name"placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label></Form.Label>
                    <Form.Control type="name" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
              </Form>
            </div>
          );
    }

}

export default connect(null, { addUser })(LoginCreateForm)