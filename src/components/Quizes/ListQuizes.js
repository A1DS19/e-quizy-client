import React, { Component, Fragment } from 'react';
import requireAuth from '../../middlewares/requireAuth';
import ListAllQuizes from './ListAllQuizes';

export class ListQuizes extends Component {
  render() {
    return (
      <Fragment>
        <div className='page-header'>
          <div
            className='page-header section-dark'
            style={{
              backgroundImage: `url(${require('../../assets/img/sections/gerrit-vermeulen.jpg')})`,
            }}
          >
            <div className='filter'></div>
            <div className='content-center'>
              <div className='motto'>
                <h1 className='title-uppercase text-center'>Pruebas disponibles</h1>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className='main'>
            <div className='section section-gray'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6 ml-auto mr-auto text-center title'>
                    <h2>Pruebas</h2>
                  </div>
                </div>
                <div className='article'>
                  <div className='row' style={{ position: 'relative' }}>
                    <ListAllQuizes />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default requireAuth(ListQuizes);
