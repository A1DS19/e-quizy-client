import React, { Component, Fragment } from 'react';
import requireAuth from '../../middlewares/requireAuth';

export class ListQuizes extends Component {
  render() {
    return <Fragment>Listar quizes</Fragment>;
  }
}

export default requireAuth(ListQuizes);
