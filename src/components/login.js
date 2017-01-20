import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { authUser } from '../actions/index';

class Login extends Component {
    render() {
      return(
        <div>
            <form>
                <input />
                <input />
                <button type="submit">Login</button>
            </form>
        </div>
      );
    }
}

export default Login;
