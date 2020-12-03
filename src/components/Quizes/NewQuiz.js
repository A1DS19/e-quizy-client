import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorValidation from '../resources/ErrorValidation';
import requireAuth from '../../middlewares/requireAuth';
import { fetchEvaluacionesTypes, addEval } from '../../actions/index';
import { toast } from 'react-toastify';
import SmallLoader from '../resources/SmallLoader';

export class NewQuiz extends Component {
  state = {
    title: '',
  };

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  validationSchema = Yup.object().shape({
    name: Yup.string().required('Debe agregar el nombre de la evaluacion'),
    categoryEvaluationId: Yup.string().required('Debe agregar la categoria de la prueba'),
    topicEvaluationId: Yup.string().required('Debe agregar la materia de la prueba'),
    typeEvaluationId: Yup.string().required('Debe agregar el tipo de evaluacion'),
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
                        categoryEvaluationId: '',
                        topicEvaluationId: '',
                        typeEvaluationId: '',
                        description: '',
                        rules: '',
                      }}
                      validationSchema={this.validationSchema}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        this.props.addEval(values, () => {
                          setSubmitting(false);
                          toast.success('Evaluacion creada');
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
                                name='categoryEvaluationId'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                              >
                                <option selected={true} disabled>
                                  Selecciona una categoría...
                                </option>
                                {this.props.evalType?.categoriesEvaluation &&
                                  this.props.evalType?.categoriesEvaluation.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                      {cat.category}
                                    </option>
                                  ))}
                              </select>
                              {
                                <ErrorValidation
                                  touched={touched.categoryEvaluationId}
                                  message={errors.categoryEvaluationId}
                                />
                              }
                            </div>
                            <div className='col-md-4 form-group'>
                              <label htmlFor='exampleFormControlSelect1'> Materia</label>
                              <select
                                name='topicEvaluationId'
                                className='form-control'
                                onChange={handleChange}
                                onBlur={handleBlur}
                              >
                                <option selected={true} disabled>
                                  Selecciona una materia...
                                </option>

                                {this.props.evalType?.topicsEvaluation &&
                                  this.props.evalType?.topicsEvaluation.map((topic) => (
                                    <option key={topic.id} value={topic.id}>
                                      {topic.topic}
                                    </option>
                                  ))}
                              </select>
                              {
                                <ErrorValidation
                                  touched={touched.topicEvaluationId}
                                  message={errors.topicEvaluationId}
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
                                  touched={touched.typeEvaluationId}
                                  message={errors.topicEvaluationId}
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
                              <i
                                className={
                                  isSubmitting === true ? null : 'fa fa-file-text-o'
                                }
                                aria-hidden='true'
                              ></i>
                              {isSubmitting === true ? <SmallLoader /> : 'Crear'}
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
