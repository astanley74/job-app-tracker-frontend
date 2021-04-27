import React from 'react';
import {connect} from 'react-redux'

import {addJobApplication} from '../actions/addJobApplication'

class JobApplicationInput extends React.Component {
    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps, { addJobApplication })(JobApplicationInput)