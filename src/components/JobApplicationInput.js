import React from 'react';
import {connect} from 'react-redux'

import {addJobApplication} from '../actions/addJobApplication'

class JobApplicationInput extends React.Component {

    constructor(){
        super()
        this.state = {
            company_name: "",
            date_of_application: "",
            position: "",
            application_status: true,
            current_state: "",
            notes: "",
            user_id: null
        }
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

export default connect(mapStateToProps, { addJobApplication })(JobApplicationInput)