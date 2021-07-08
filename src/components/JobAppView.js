import React from 'react';
import {connect} from 'react-redux';

class JobAppView extends React.Component {


    render() {
        
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {job_apps: state.user.job_applications}
}
export default connect(mapStateToProps)(JobAppView)