import React from 'react';
import {connect} from 'react-redux';


class JobApplicationsContainer extends React.Component {
    render() {
        return(
            <div>{console.log(this.props.user.job_applications)}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(JobApplicationsContainer)