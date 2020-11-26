import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import requireAuth from '../../middlewares/requireAuth';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchEvals, deleteQuiz } from '../../actions/index';
import Loader from '../resources/Loader';
import { toast } from 'react-toastify';

export class ListAllQuizes extends Component {
  componentDidMount() {
    this.props.fetchEvals();
  }

  deleteQuizHandler = (id) => {
    this.props.deleteQuiz(id, () => {
      this.props.fetchEvals();
      toast.success('Prueba eliminada');
    });
  };

  fetchQuizez = () => {
    if (!this.props.evals) {
      return <Loader />;
    }
    return this.props.evals.map((test) => (
      <div className='col-md-4' key={test.id}>
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
              onClick={() => this.deleteQuizHandler(test.id)}
              className='fa fa-trash-o ml-4 mt-1 text-danger mr-3 mt-2'
              aria-hidden='true'
              style={{ float: 'right' }}
            />
          </div>

          <div className='text-center'></div>

          <div className='card-body'>
            <h4 className='card-title'>{test.name}</h4>
            <p className='card-text'>{test.description}</p>

            <div
              className='row'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Link
                to={`/quizes/update_quiz/${test.id}`}
                className='btn btn-primary'
                style={{ color: 'white' }}
              >
                Editar
              </Link>

              <Link
                to={`/quizes/questions/${test.id}`}
                className='btn btn-primary ml-2'
                style={{ color: 'white' }}
              >
                Preguntas
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return <Fragment>{this.fetchQuizez()}</Fragment>;
  }
}
const mapStateToProps = ({ evals }) => {
  console.log(evals);
  return { evals: evals.evalsList };
};
export default compose(connect(mapStateToProps, { fetchEvals, deleteQuiz }))(
  requireAuth(ListAllQuizes)
);
