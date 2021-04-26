import React from 'react';

export default class User extends React.component {
    render() {
        return(
            <div>
                {this.props.user.name}
            </div>
        )
    }
}