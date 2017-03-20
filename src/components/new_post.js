import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import NewPostForm from './new_post_form';
import { newPost as newPostAction } from '../actions/index';

class NewPost extends Component {
    handleNewPost(fieldValue) {
        // TODO Get post id and username
        const author = this.props.login.username;
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

function mapStateToProps(state) {
    return {
        login: state.login,
    };
}

export default connect(mapStateToProps, { newPostAction })(NewPost);
