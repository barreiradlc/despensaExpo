import React, { Component } from 'react';
import { } from 'react-native';
import Carregando from './recursos/Carregando';
import deviceStorage from './recursos/deviceStorage';

// import Login from './telas/login';
// import Login from './telas/login';

import Rotas from './recursos/rotas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      jwt: ''
    }
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  render() {
    const { jwt, loading } = this.state;
    console.warn('jwt', jwt)

    if (loading) {
      return (
        <Carregando />
      );
    } else {
      return (
        <Rotas />
      );
    }

  }
}

