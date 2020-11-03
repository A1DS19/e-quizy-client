import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorValidation from '../resources/ErrorValidation';
import requireAuth from '../../middlewares/requireAuth';

export class UpdateQuiz extends Component {
  validationSchema = Yup.object().shape({
    name: Yup.string().required('Debe agregar el nombre de la evaluacion'),
    categoryEvaluation: '',
    topicEvaluation: '',
    typeEvaluation: '',
    description: Yup.string().required('Debe agregar la decripccion de la evaluacion'),
    rules: Yup.string().required('Debe agregar las reglas de la evaluacion'),
  });

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
                      <Formik
                        initialValues={{
                          name: 'valor inicial',
                          categoryEvaluation: 0,
                          topicEvaluation: 0,
                          typeEvaluation: 0,
                          description: 'valor inicial',
                          rules: 'valor inicial',
                        }}
                        validationSchema={this.validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setSubmitting(true);
                          console.log(values);
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
                                  name='categoryEvaluation'
                                  className='form-control'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.categoryEvaluation}
                                >
                                  <option selected={true} disabled>
                                    Selecciona una categoría...
                                  </option>

                                  <option value='{{ cat.id }}'>
                                    {'{ cat.category }'}
                                  </option>
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
                                  name='topicEvaluation'
                                  className='form-control'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.topicEvaluation}
                                >
                                  <option selected={true} disabled>
                                    Selecciona una materia...
                                  </option>
                                  <option value='{{ topic.id }}'>
                                    {'{ topic.topic }'}
                                  </option>
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
                                  value={values.typeEvaluation}
                                >
                                  <option selected={true} disabled>
                                    Selecciona un tipo de evaluacion...
                                  </option>
                                  <option value='{{ type.id }}'>{'type.type'}</option>
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
                              <button type='submit' className='btn btn-primary btn-round'>
                                <i className='fa fa-file-text-o' aria-hidden='true'></i>
                                Actualizar
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
        </div>
      </Fragment>
    );
  }
}

export default requireAuth(UpdateQuiz);
