import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// TODO: Set tab active based on app state
// TODO: Make Login change to Logout if user is auth'd and logged in
class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <ul className='nav navbar-nav nav-tabs'>
              <li>
                <Link to='/' className=''>Home</Link>
              </li>
              <li>
                <Link to='new'>New Post</Link>
              </li>
              <li>
                <Link to='login' className=''>Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(App);
