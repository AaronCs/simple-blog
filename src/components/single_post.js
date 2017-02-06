import React, { Component } from 'react';

class SinglePost extends Component {
  render() {
    const { author, content, title } = this.props;
    // TODO: Styling
    return (
      <div>
        <h2>{title}</h2>
        <div>{content}</div>
        <div>Author: {author}</div>
      </div>
    );
  }
}

export default SinglePost;
