import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import NewPostForm from './new_post_form';
import { newPost as newPostAction } from '../actions/index';

class NewPost extends Component {
    handleNewPost(fieldValue) {
        // TODO Get post id and username
        const author = 'Aaron';
        this.props.newPostAction(fieldValue, author);
    }
    render() {
      return(
        <div>
          <h3>
             New Post
          </h3>
          <NewPostForm onSubmit={this.handleNewPost.bind(this)} />
        </div>
        );
    }
}

export default connect(null, { newPostAction })(NewPost);
