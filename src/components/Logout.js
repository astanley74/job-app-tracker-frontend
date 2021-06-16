import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/logoutUser';
import App from '../App.js'

class Logout extends React.Component {

    redirectToHome = () => {
        this.props.logoutUser()
        this.props.history.push('/')
    }

  render() {
    return (
    <div>
      {this.redirectToHome()}
      <App/>
    </div>
  )}
}


export default connect(null, {logoutUser})(Logout);