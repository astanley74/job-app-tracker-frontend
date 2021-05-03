import React from 'react';
import JobAppCard from '../components/JobAppCard'
import {CardDeck} from 'react-bootstrap'


class JobApplicationsContainer extends React.Component {


    generateJobAppCards = () => {
        return this.props.user.job_applications.map(job_application => <JobAppCard key={job_application.id} job_app={job_application}/>)
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