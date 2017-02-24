import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost } from '../actions/index';

class SinglePost extends Component {
  render() {
    const { author, content, title, post_id, index } = this.props;
    // TODO: Styling
    return (
      <div className='col-md-4'>
        <div className="ex" onClick={this.props.removePost.bind(null, post_id, index)}>x</div>
        <h2>{title}</h2>
        <div>{content}</div>
        <div>Author: {author}</div>
      </div>
    );
  }
}

export default connect(null, { removePost })(SinglePost);
