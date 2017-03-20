import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

// This container makes sure that users are logged in
// before making new posts.

class EnsureLoggedIn extends Component {
  componentDidMount() {
    if(!this.props.login.loggedIn) {
      browserHistory.replace('/login');
    }
  }
  render() {
    return this.props.children;
  }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        router: state.router,
    };
}

export default connect(mapStateToProps)(EnsureLoggedIn);
