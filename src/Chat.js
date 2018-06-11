import React, {Component} from 'react';
import {connect} from 'react-redux';

class Chat extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Users:</h3>
                <button onClick={() => this.props.dispatch({ type: 'ADD_NEW_USER'})}>
                    add new user
                </button>
                <hr/>
                {this.props.users.map( u => {
                    return <p key={u}> {u} </p>
                })}
                
            </div>
        );
    }
}

export default connect(state => {
    return {
        users: state
    }
})(Chat);
