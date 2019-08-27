import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  state = { comment: ''};

  // runs when component is rendered
  componentDidMount() {
    this.checkAuthentication();
  }

  // runs when component is updated
  componentDidUpdate() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, actions)(CommentBox);
