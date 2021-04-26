import React from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'

class User extends React.Component {
    render() {
        return(
            <div>
                <NavBar/>
                <Jumbotron>
                    <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                        <p>
                            Welcome to your job application portal. All of your current job applications are listed below.
                        </p>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}
export default connect(mapStateToProps)(User)