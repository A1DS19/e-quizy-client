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
        <div class='wrapper'>
          <div class='main'>
            <div class='section section-gray'>
              <div class='container'>
                <div class='row'>
                  <div class='col-md-6 ml-auto mr-auto text-center title'>
                    <h2>Pruebas</h2>
                  </div>
                </div>
                <div class='article'>
                  <div class='row' style={{ position: 'relative' }}>
                    {/* <evaluation
              *ngFor="let eval of evaluations"
              [eval]="eval"
              (edit)="edit($event)"
              (delete)="delete($event)"
              (selectQuestionsList)="selectQuestionsList($event)"
            ></evaluation> */}
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
