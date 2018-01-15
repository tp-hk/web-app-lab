import React, { Component } from 'react';

import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <span>post index</span>
        <div>
          {/* {this.props.posts} */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostIndex);