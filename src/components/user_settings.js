import React, { Component } from 'react';
import { userLogout } from '../actions/index';
import { connect } from 'react-redux';

class UserSettings extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.userLogout} className='btn btn-danger'>
          Logout
        </button>
      </div>
    );
  }
}



export default connect(null, {userLogout})(UserSettings);
