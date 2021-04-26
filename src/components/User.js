import React from 'react';
import {connect} from 'react-redux'
import NavBar from './Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'

class User extends React.Component {
    render() {
        return(
            <div>
                <NavBar/>
                <Jumbotron>
                    <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user}
}
export default connect(mapStateToProps)(User)