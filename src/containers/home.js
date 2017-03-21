import React, { Component} from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SinglePost from '../components/single_post';

// TODO Make sure that users are only allowed to delete their own posts.
// TODO: Use CSS Transition Groups to render posts.
// TODO: Look up CSS Transitions
// TODO: Add commenting on posts
// TODO: Add max of 10 posts, and a load more button to load 10 more.
// TODO: Show 3 dots as settings to delete, share, or whatever. (Star? Pin?)
class Home extends Component {
  renderPosts() {
    const { posts } = this.props;
    // If there are no posts, then return early
    if(posts.length < 1) return <div>No Posts</div>;
    // Otherwise, return an array of mapped elements.
    return posts.map( (post, i) => {
      return <SinglePost className="" post_id={post.post_id} key={i} index={i} title={post.title}
              content={post.content} author={post.author}/>;
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
