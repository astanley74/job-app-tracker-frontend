import React from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import JobApplicationsContainer from '../containers/JobApplicationsContainer'

const User = (props) => {

        return(
            <div>
                <NavBar/>
                <Jumbotron>
                    <h1>{props.user.first_name} {props.user.last_name}</h1>
                        <p>
                            Welcome to your job application portal. All of your current job applications are listed below.
                        </p>
                </Jumbotron>
                <JobApplicationsContainer user={props.user}/>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}
export default connect(mapStateToProps)(User)