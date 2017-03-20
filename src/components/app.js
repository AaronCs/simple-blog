import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link, browserHistory } from 'react-router';

// TODO: Set tab active based on app state
// TODO: Make Login change to Logout if user is auth'd and logged in
class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    // Move settings button to the right.
    return (
      <div>
        <div className='to-the-right'>
          Welcome, {this.props.login.username}
        </div>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <ul className='nav navbar-nav nav-tabs'>
              <li>
                <Link to='/' className=''>Home</Link>
              </li>
              <li onClick={() => browserHistory.push('new')}>
                <Link to='new' >New Post</Link>
              </li>
              <li onClick={() => browserHistory.push('settings')}>
                <Link to='/settings' >Settings</Link>
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

function mapStateToProps(state) {
    return {
        login: state.login,
    };
}

export default connect(mapStateToProps, { fetchPosts })(App);
