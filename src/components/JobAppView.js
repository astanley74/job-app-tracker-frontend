import React from 'react';
import {connect} from 'react-redux';

const JobAppView = (props) => {
    let job_app = props.job_apps.filter(job => job.id === parseInt(props.match.params.jobId))[0]
    console.log(job_app)
        return(
            <div>{job_app.company_name}</div>
        )
}

const mapStateToProps = (state) => {
    return {job_apps: state.user.job_applications}
}
export default connect(mapStateToProps)(JobAppView)