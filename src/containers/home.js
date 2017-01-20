import React, { Component} from 'react';
import { connect } from 'react-redux';

// I need to grab posts from firebase
class Home extends Component {
  render() {
    return(
      <div>
        <h3>
          Home
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(Home);
