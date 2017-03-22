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
        this.setActiveTab('/', this.state.activeTab);
    }
    setActiveTab(url, tabName) {
        let prev = this.state.activeTab;
        prev = document.getElementById(prev);
        // Explanation of regex:
        // (?:^|\s)  Match start of string, or any single whitespace
        // (?!\S) Negative lookahead to verify the above is the whole classname
        prev.className = prev.className.replace(/(?:^|\s)active(?!\S)/g, '');
        browserHistory.push(url);
        this.setState({
            activeTab: tabName,
        });
        const elToSetActive = document.getElementById(tabName);
        elToSetActive.className += 'active';
        // Figure out how to reset back to selecting home if logged in.
    }
    render() {
      return(
        <nav>
            <div className='navbar-user'>
              Welcome, {this.props.username}
            </div>
                <ul className='navbar-nav'>
                  <li id='home' onClick={() => this.setActiveTab('/', 'home')}>
                    <Link to='/' className=''>Home</Link>
                  </li>
                  <li id='new' onClick={() => this.setActiveTab('new', 'new')}>
                    <Link to='new' >New Post</Link>
                  </li>
                  <li id='settings' onClick={() => this.setActiveTab('settings', 'settings')}>
                    <Link to='settings' >Settings</Link>
                  </li>
                </ul>
        </nav>
      );
    }
}

export default Nav;
