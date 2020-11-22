import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik } from 'formik';
import ErrorValidation from '../resources/ErrorValidation';
import requireAuth from '../../middlewares/requireAuth';
import { fetchEvaluacionesTypes, fetchEval, updateEval } from '../../actions/index';
import { quizSchema } from './quizValidation';
import Loader from '../resources/Loader';
export class UpdateQuiz extends Component {
  state = {
    eval: {},
  };
  componentDidMount() {
    this.props.fetchEvaluacionesTypes();
    this.props.fetchEval(this.props.match.params.id, () => {
      this.setState({ eval: this.props.eval });
    });
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
                <h1 className='title-uppercase text-center'>Editar quiz</h1>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className='main'>
            <div className='section section-gray'>
              <div className='container'>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-md-6 ml-auto mr-auto text-center title'>
                    <h2>Editar</h2>
                  </div>
                  <div className='row'>
                    <div className='col-md-12 ml-auto mr-auto title'>
                      {console.log(this.state.eval)}
                      <Formik
                        enableReinitialize
                        initialValues={{
                          name: this.state.eval?.name,
                          categoryEvaluationId: this.state.eval?.categoryEvaluationId,
                          topicEvaluationId: this.state.eval?.topicEvaluationId,
                          typeEvaluationId: this.state.eval?.typeEvaluationId,
                          description: this.state.eval?.description,
                          rules: this.state.eval?.rules,
                        }}
                        validationSchema={quizSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          this.props.updateEval(values, () => {
                            setSubmitting(true);
                            setSubmitting(false);
                            this.props.history.push('/quizes/list_quizes');
                          });
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
                        }) =>
                          !this.props.eval ? (
                            <Loader />
                          ) : (
                            <form className='settings-form' onSubmit={handleSubmit}>
                              <div className='form-group'>
                                <label htmlFor='exampleFormControlSelect1'>
                                  Nombre de evaluación
                                </label>
                                <input
                                  name='name'
                                  className='form-control'
                                  type='text'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
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
                                    name='categoryEvaluationId'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.categoryEvaluationId}
                                  >
                                    <option selected={true}>
                                      Selecciona una categoría...
                                    </option>

                                    {this.props.evalType?.categoriesEvaluation &&
                                      this.props.evalType?.categoriesEvaluation.map(
                                        (cat) => (
                                          <option key={cat.id} value={cat.id}>
                                            {cat.category}
                                          </option>
                                        )
                                      )}
                                  </select>
                                  {
                                    <ErrorValidation
                                      touched={touched.categoryEvaluation}
                                      message={errors.categoryEvaluation}
                                    />
                                  }
                                </div>
                                <div className='col-md-4 form-group'>
                                  <label htmlFor='exampleFormControlSelect1'>
                                    {' '}
                                    Materia
                                  </label>
                                  <select
                                    name='topicEvaluationId'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.topicEvaluationId}
                                  >
                                    <option selected={true} disabled>
                                      Selecciona una materia...
                                    </option>
                                    {this.props.evalType?.topicsEvaluation &&
                                      this.props.evalType?.topicsEvaluation.map(
                                        (topic) => (
                                          <option key={topic.id} value={topic.id}>
                                            {topic.topic}
                                          </option>
                                        )
                                      )}
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
                                    name='typeEvaluationId'
                                    className='form-control'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.typeEvaluationId}
                                  >
                                    <option selected={true} disabled>
                                      Selecciona un tipo de evaluacion...
                                    </option>
                                    {this.props.evalType?.typesEvaluation &&
                                      this.props.evalType?.typesEvaluation.map((type) => (
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
                                  value={values.description}
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
                                  value={values.rules}
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
                                <button
                                  type='submit'
                                  className='btn btn-primary btn-round'
                                >
                                  <i className='fa fa-file-text-o' aria-hidden='true'></i>
                                  Actualizar
                                </button>
                              </div>
                            </form>
                          )
                        }
                      </Formik>
                    </div>
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
  return { evalType: state.evals.evalTypes, eval: state.evals.eval };
};

export default compose(
  connect(mapStateToProps, { fetchEvaluacionesTypes, fetchEval, updateEval })
)(requireAuth(UpdateQuiz));
