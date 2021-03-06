/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth0';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Carregando...</p>
    );
  }
}

export default withRouter(Callback);