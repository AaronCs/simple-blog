import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userLoginAuth } from '../actions/index';

class Login extends Component {
    // TODO: Display red text if user tries to login but is already logged in.
    render() {
      return(
          <div>
              Login to view page
            <button onClick={this.props.userLoginAuth} className='btn btn-primary'>
              Login
            </button>
          </div>
      );
    }
}


export default connect(null, {userLoginAuth})(Login);
