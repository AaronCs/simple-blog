import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts, beginningLoginAuth } from '../actions/index';
import Nav from './nav';

// TODO: Set tab active based on app state
// TODO: Make a logout button.
class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    this.props.beginningLoginAuth();
  }
  render() {
    return (
      <div>
        <Nav username={this.props.login.username}/>
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

export default connect(mapStateToProps, { fetchPosts, beginningLoginAuth })(App);
