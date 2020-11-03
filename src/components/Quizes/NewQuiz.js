import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorValidation from '../resources/ErrorValidation';
import requireAuth from '../../middlewares/requireAuth';
import { fetchEvaluacionesTypes, addEval } from '../../actions/index';

export class NewQuiz extends Component {
  state = {
    title: '',
  };

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  validationSchema = Yup.object().shape({
    name: Yup.string().required('Debe agregar el nombre de la evaluacion'),
    categoryEvaluation: '',
    topicEvaluation: '',
    typeEvaluation: '',
    description: Yup.string().required('Debe agregar la decripccion de la evaluacion'),
    rules: Yup.string().required('Debe agregar las reglas de la evaluacion'),
  });

  componentDidMount() {
    this.props.fetchEvaluacionesTypes();
  }

  render() {
    return (
      <Fragment>
        <div className='page-header'>
          <div
            className='page-header section-dark'
            style={{
              backgroundImage: `url(${require('../../assets/img/sections/uriel-soberanes.jpg')})`,
            }}
          >
            <div className='filter'></div>
            <div className='content-center'>
              <div className='motto'>
                <h1 className='title-uppercase text-center'>Crear evaluacion</h1>
                <h3 className='text-center'>
                  Crea una evaluacion, inova con preguntas y comparte.
                </h3>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className='wrapper'>
          <div className='main'>
            <div className='section section-white'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12 ml-auto mr-auto title'>
                    <div className='title col-md-12 text-center mb-0 mt-0 pt-0'>
                      <h2 className='mb-3'>{this.state.title}</h2>
                    </div>
                    <Formik
                      initialValues={{
                        name: '',
                        categoryEvaluationId: 1,
                        topicEvaluationId: 1,
                        typeEvaluationId: 1,
                        description: '',
                        rules: '',
                      }}
                      validationSchema={this.validationSchema}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        this.props.addEval(values, () => {
                          this.props.history.push('/quizes/list_quizes');
                        });
                        setSubmitting(false);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <form className='settings-form' onSubmit={handleSubmit}>
                          <div className='form-group'>
                            <label htmlFor='exampleFormControlSelect1'>
                              Nombre de evaluación
                            </label>
                            <input
                              name='name'
                              className='form-control'
                              placeholder='Elija un nombre para su evaluación'
                              type='text'
                              onChange={(e) => {
                                handleChange(e);
                                this.onTitleChange(e);
                              }}
                              onBlur={handleBlur}
                            />
                            {
                              <ErrorValidation
                                touched={touched.name}
                                message={errors.name}
                              />
                            }
                          </div>
                          <div className='row'>
                            <div className='col-md-4 form-group'>
                              <label htmlFor='exampleFormControlSelect1'>
                                {' '}
                                Categoría
                              </label>
                              <select
                                name='categoryEvaluation'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                              >
                                <option defaultValue='0' disabled={true}>
                                  Selecciona una categoría...
                                </option>
                                {this.props.evalType.categoriesEvaluation &&
                                  this.props.evalType.categoriesEvaluation.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                      {cat.category}
                                    </option>
                                  ))}
                              </select>
                              {
                                <ErrorValidation
                                  touched={touched.categoryEvaluation}
                                  message={errors.categoryEvaluation}
                                />
                              }
                            </div>
                            <div className='col-md-4 form-group'>
                              <label htmlFor='exampleFormControlSelect1'> Materia</label>
                              <select
                                name='topicEvaluation'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                              >
                                <option defaultValue='0' disabled={true}>
                                  Selecciona una materia...
                                </option>

                                {this.props.evalType.topicsEvaluation &&
                                  this.props.evalType.topicsEvaluation.map((topic) => (
                                    <option key={topic.id} value={topic.id}>
                                      {topic.topic}
                                    </option>
                                  ))}
                              </select>
                              {
                                <ErrorValidation
                                  touched={touched.topicEvaluation}
                                  message={errors.topicEvaluation}
                                />
                              }
                            </div>
                            <div className='col-md-4 form-group'>
                              <label htmlFor='exampleFormControlSelect1'>
                                Tipo de evaluacion
                              </label>
                              <select
                                name='typeEvaluation'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                              >
                                <option defaultValue='0' disabled={true}>
                                  Selecciona un tipo de evaluacion...
                                </option>

                                {this.props.evalType.typesEvaluation &&
                                  this.props.evalType.typesEvaluation.map((type) => (
                                    <option key={type.id} value={type.id}>
                                      {type.type}
                                    </option>
                                  ))}
                              </select>
                              {
                                <ErrorValidation
                                  touched={touched.typeEvaluation}
                                  message={errors.topicEvaluation}
                                />
                              }
                            </div>
                          </div>
                          <div className='form-group'>
                            <label htmlFor='description'> Descripción </label>
                            <textarea
                              name='description'
                              placeholder='Da una descripción detallada de esta evaluación...'
                              className='form-control'
                              rows='3'
                              onChange={handleChange}
                              onBlur={handleBlur}
                            ></textarea>
                            {
                              <ErrorValidation
                                touched={touched.description}
                                message={errors.description}
                              />
                            }
                          </div>
                          <div className='form-group'>
                            <label htmlFor='evaluationRules'> Reglas </label>
                            <textarea
                              name='rules'
                              placeholder='Crear reglas de la evaluación...'
                              className='form-control'
                              rows='3'
                              onChange={handleChange}
                              onBlur={handleBlur}
                            ></textarea>
                            <ErrorValidation
                              touched={touched.rules}
                              message={errors.rules}
                            />
                          </div>
                          <div
                            className='row'
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <button type='submit' className='btn btn-primary btn-round'>
                              <i className='fa fa-file-text-o' aria-hidden='true'></i>
                              Crear
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
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

const mapStateToProps = (state) => {
  return { evalType: state.evals.evalTypes };
};

export default compose(connect(mapStateToProps, { fetchEvaluacionesTypes, addEval }))(
  requireAuth(NewQuiz)
);
