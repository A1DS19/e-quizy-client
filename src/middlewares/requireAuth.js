import React, { Component } from 'react';
import { connect } from 'react-redux';
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
