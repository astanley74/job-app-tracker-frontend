import React from 'react';
import {connect} from 'react-redux';
import JobAppCard from '../components/JobAppCard'
import {CardDeck} from 'react-bootstrap'


class JobApplicationsContainer extends React.Component {


    generateJobAppCards = () => {
        // console.log(this.props.user.job_applications)
        return this.props.user.job_applications.map((job_application, index) => <JobAppCard
            key={index}
            company={job_application.company_name}
            date={job_application.date_of_application}
            position={job_application.position}
            application_status={job_application.application_status}
            current_stage={job_application.current_stage}
            notes={job_application.notes}
            />)
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