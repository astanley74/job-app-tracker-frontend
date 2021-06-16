import React from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import JobApplicationsContainer from '../containers/JobApplicationsContainer'
import Footer from './Footer'
// ensure new branch is working

const User = (props) => {
    const { user } = props;
        return(
            <div>
                <NavBar/>
                <Jumbotron>
                    <h1>{user.first_name} {user.last_name}</h1>
                        <p>
                            Welcome to your job application portal. All of your current job applications are listed below.
                        </p>
                </Jumbotron>
                <JobApplicationsContainer />
                <Footer/>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}
export default connect(mapStateToProps)(User)