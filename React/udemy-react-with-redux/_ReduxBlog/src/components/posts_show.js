import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      // this.props.id comes from the react-router
      // params lists all the wildcard e.g. if <Route path='/post/:id/:comment'...></Route>, params will contain id and comment
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  deletePost() {
    // better use this 
    const { id } = this.props.match.params;
    // than this.props.post.id
    // since this.props.post might still be undefined at this point 
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post)
      return null;

    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/'>
            Back
          </Link>
          <button className='btn btn-danger pull-xs-right'
            onClick={() => this.deletePost()} >
            Delete Post
          </button>
        </div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.tags}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

// export default PostsShow;
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);