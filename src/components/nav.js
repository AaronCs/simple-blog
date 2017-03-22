import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Nav extends Component {
    // TODO: Show a menu on click for navbar-user (dropdown?)
    // Add an upside down triangle to show it's a menu
    // TODO: Keep the overline active when on that page.
    // Have to access the browser history.
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home',
        };
    }
    handleClick(url, tabName) {
        browserHistory.push(url);
        this.setState({
            activeTab: tabName,
        });
    }
    render() {
      return(
        <nav>
            <div className='navbar-user'>
              Welcome, {this.props.username}
            </div>
                <ul className='navbar-nav'>
                  <li id='home' onClick={() => this.handleClick('/', 'home')}>
                    <Link to='/' className=''>Home</Link>
                  </li>
                  <li id='new' onClick={() => this.handleClick('new', 'new')}>
                    <Link to='new' >New Post</Link>
                  </li>
                  <li id='settings' onClick={() => this.handleClick('settings', 'settings')}>
                    <Link to='settings' >Settings</Link>
                  </li>
                </ul>
        </nav>
      );
    }
}

export default Nav;
