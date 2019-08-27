import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from './requireAuth.jsx';

class CommentBox extends Component {
  state = { comment: ''};

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // Call action creator and save the comment
    this.props.saveComment(this.state.comment);
    // clear the comment field
    this.setState({ comment: ''});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments} >Fetch Comments</button>
      </div>
    );
  };
};

// THe connect tag takes the action creators
// and passes them as props down to CommentBox
// Route also passes props down props.history

export default connect(null, actions)(requireAuth(CommentBox));
