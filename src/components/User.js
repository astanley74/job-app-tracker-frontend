import React from 'react';
import {connect} from 'react-redux'

class User extends React.Component {
    render() {
        return(
            <div>
                {this.props.user.first_name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}
export default connect(mapStateToProps)(User)