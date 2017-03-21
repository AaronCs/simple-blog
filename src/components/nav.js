import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Nav extends Component {
    // TODO: Show a menu on click for navbar-user (dropdown?)
    // Add an upside down triangle to show it's a menu
    render() {
      return(
        <nav className=''>
            <div className='navbar-user'>
              Welcome, {this.props.username}
            </div>
                <ul className='navbar-nav'>
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
        </nav>
      );
    }
}

export default Nav;
