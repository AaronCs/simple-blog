import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removePost } from '../actions/index';
//import firebase from 'firebase';
import SinglePostExpanded from './single_post_expanded';

class SinglePost extends Component {
  /*handleMouseEnter(index) {
    // Check the uids.
    if(firebase.auth().currentUser.uid == this.props.uid) {
      let ex = document.getElementsByClassName('ex');
      ex[index].hidden = false;
      // TODO: Put the remove post button in the comments section.
    }
  }
  handleMouseLeave(index) {
    let ex = document.getElementsByClassName('ex');
    ex[index].hidden = true;
  }*/
  displayContent(content) {
      if(content.length > 300) {
        return content.slice(0, 301) + ' . . .';
      }
      return content;
  }
  render() {
    const { author, content, title, post_id, index, uid } = this.props;
    // TODO: Styling
    return (
      <div className='single-post'>
        <h3 className='title' >{title}</h3>
        <div className='content'>{this.displayContent(content)}</div>
        <div className='author'>Author: {author}</div>
      </div>
    );
  }
}

export default connect(null, { removePost })(SinglePost);

/* <div hidden className="ex" onClick={this.props.removePost.bind(null, post_id, index)}>X</div> */
