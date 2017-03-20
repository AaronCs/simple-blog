import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userLoginAuth } from '../actions/index';

class Login extends Component {
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
