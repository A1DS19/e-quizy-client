import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ListAllQuizes extends Component {
  render() {
    return (
      <div className='col-md-4'>
        <div className='card' style={{ width: '20rem' }}>
          <div
            className='card-img-top'
            style={{
              backgroundImage: `url(${require('../../assets/img/evaluations/kelly-sikkema-dgVSuJu58C0-unsplash.jpg')})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '180px',
            }}
          >
            <i
              className='fa fa-trash-o ml-4 mt-1 text-danger mr-3 mt-2'
              aria-hidden='true'
              style={{ float: 'right' }}
            ></i>
          </div>

          <div className='text-center'></div>

          <div className='card-body'>
            <h4 className='card-title'>
              TITULO
              {/* {{
          eval.name.length > 20 ? (eval.name | slice: 0:20) + "..." : eval.name
        }} */}
            </h4>
            <p className='card-text'>
              DESCRIPCCION
              {/* {{
          eval.description.length > 68
            ? (eval.description | slice: 0:68) + "..."
            : eval.description
        }} */}
            </p>

            <div
              className='row'
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Link
                to='/quizes/update_quiz'
                className='btn btn-primary'
                style={{ color: 'white' }}
              >
                Editar
              </Link>

              <Link to='#' className='btn btn-primary ml-2' style={{ color: 'white' }}>
                Preguntas
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListAllQuizes;
