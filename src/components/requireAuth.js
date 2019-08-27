import React, { Component } from 'react';

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
      return <ChildComponent />;
    }
  }

  return ComposedComponent;
};

