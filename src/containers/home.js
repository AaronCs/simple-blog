import React, { Component} from 'react';
import { connect } from 'react-redux';
import SinglePost from '../components/single_post';

// I need to grab posts from firebase
// For styling, use list-group-item
class Home extends Component {
  renderPosts() {
    const { posts } = this.props;
    // If there are no posts, then return early
    if(posts.length < 1) return <div>No Posts</div>;
    // Otherwise, return an array of mapped elements.
    return posts.map( (post, i) => {
      return <SinglePost key={i} title={post.title} content={post.content} author={post.author}/>;
    });
  }
  render() {
    return(
      <div>
        <h1>
          Home
        </h1>
        {this.renderPosts()}
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
