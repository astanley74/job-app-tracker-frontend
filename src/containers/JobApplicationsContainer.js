import React from 'react';
import {connect} from 'react-redux';
import JobAppCard from '../components/JobAppCard'
import {CardDeck} from 'react-bootstrap'


class JobApplicationsContainer extends React.Component {


    generateJobAppCards = () => {
        return this.props.user.job_applications.map((job_application, index) => <JobAppCard key={index} job_app={job_application}/>)
    }

    render() {
        return(
            <div>
                <CardDeck>
                    {this.generateJobAppCards()}
                </CardDeck>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {user: state.user}
// }

export default JobApplicationsContainer