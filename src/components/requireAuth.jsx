import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
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

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

