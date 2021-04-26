import React from 'react';
import {connect} from 'react-redux';
import JobAppCard from '../components/JobAppCard'


class JobApplicationsContainer extends React.Component {

    generateJobAppCards = () => {
        const { user } = this.props
        return user.job_applications.map((job_application, index) => <JobAppCard
            key={index}
            comapny={job_application.company}
            date={job_application.date_of_application}
            position={job_application.position}
            application_status={job_application.application_status}
            current_stage={job_application.current_stage}
            notes={job_application.notes}
            />)
    }

    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(JobApplicationsContainer)