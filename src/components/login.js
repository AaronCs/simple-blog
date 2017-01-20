import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { authUser } from '../actions/index';

class Login extends Component {
    render() {
      return(
        <div className='row center-block'>
            <form className='bg-info'>
                <div className='col-md-4'>
                    <label>Username</label>
                    <input className='form-control' />
                </div>
                <div className='col-md-4'>
                    <label>Password</label>
                        <input className='form-control'/>
                        <button className='btn btn-default pull-right' type="submit">Login</button>
                </div>
            </form>
        </div>
      );
    }
}

export default Login;
