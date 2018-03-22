import React, { Component } from 'react';

import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import _ from 'lodash';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const items = _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={'/posts/' + post.id}>{post.title}</Link>
        </li>
      )
    })

    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-groups'>
          {items}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);