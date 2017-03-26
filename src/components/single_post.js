import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/index';
import firebase from 'firebase';

class SinglePost extends Component {
  handleMouseEnter(index) {
    // Check the uids.
    if(firebase.auth().currentUser.uid == this.props.uid) {
      let ex = document.getElementsByClassName('ex');
      ex[index].hidden = false;
    }
  }
  handleMouseLeave(index) {
    let ex = document.getElementsByClassName('ex');
    ex[index].hidden = true;
  }
  render() {
    const { author, content, title, post_id, index, uid } = this.props;
    // TODO: Styling
    return (
      <div onMouseEnter={this.handleMouseEnter.bind(this, index)}
        onMouseLeave={this.handleMouseLeave.bind(this, index)}
        className='single-post'>
        <div hidden className="ex" onClick={this.props.removePost.bind(null, post_id, index)}>x</div>
        <h2>{title}</h2>
        <div>{content}</div>
        <div>Author: {author}</div>
      </div>
    );
  }
}

export default connect(null, { removePost })(SinglePost);
