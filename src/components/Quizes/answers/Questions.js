import React, { Component, Fragment } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, FieldArray, Form, Field } from 'formik';
import QuestionDetail from './QuestionDetail';
import QuestionHeader from './QuestionHeader';
import { Link } from 'react-router-dom';
import { fetchEvaluacionesTypes } from '../../../actions/index';
import Loader from '../../resources/Loader';
import { toast } from 'react-toastify';
import { createEvalQuestion } from '../../../actions/index';

export class Questions extends Component {
  componentDidMount() {
    this.props.fetchEvaluacionesTypes();
  }

  defaultAnswer = {
    id: 0,
    answerContent: '',
    correct: 0,
  };

  defaultQuestion = {
    evaluationId: this.props.match.params.id,
    categoryQuestionId: 0,
    topicQuestionId: 0,
    typeQuestionId: 0,
    question: '',
    answers: [this.defaultAnswer],
    points: 1,
    timeToAnswer: 1,
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div
            className='page-header section-dark'
            style={{
              backgroundImage: `url(${require('../../../assets/img/sections/galen-crout.jpg')})`,
            }}
          >
            <div className='filter'></div>
            <div className='content-center'>
              <div className='motto'>
                <h1 className='title-uppercase text-center'>Preguntas</h1>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-12 ml-auto mr-auto text-center title'>
            <h2>
              <Link to='/quizes/list_quizes'>
                <i
                  className='fa fa-arrow-left text-primary ml-1'
                  style={{ float: 'left', cursor: 'pointer' }}
                />
              </Link>
            </h2>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h3 className='title'>evaluation.name</h3>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              questions: [this.defaultQuestion],
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              this.props.createEvalQuestion(values, () => {
                setSubmitting(false);
              });
            }}
          >
            {({ values, handleChange, handleBlur, setFieldValue, setFieldTouched }) => (
              <Form>
                <Accordion defaultActiveKey='0'>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                      Configurar una pregunta nueva...
                      <i
                        className='fa fa-trash-o text-danger pt-2'
                        aria-hidden='true'
                        style={{ float: 'right', cursor: 'pointer', fontSize: '20px' }}
                      />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>
                        <Accordion defaultActiveKey='0'>
                          {!values.questions ? (
                            <Loader />
                          ) : (
                            <FieldArray name='questions'>
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { questions } = values;
                                return (
                                  <div>
                                    {questions.map((question, index) => (
                                      <Card key={index}>
                                        <Fragment>
                                          <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey={(question, index + 1)}
                                          >
                                            Detalles de pregunta
                                            <i
                                              onClick={() =>
                                                index === 0
                                                  ? toast.warning(
                                                      'Debe existir al menos una pregunta!'
                                                    )
                                                  : remove(index)
                                              }
                                              className='fa fa-trash-o text-danger'
                                              style={{
                                                float: 'right',
                                              }}
                                            />
                                            <i
                                              className='fa fa-plus mr-1'
                                              style={{ float: 'right' }}
                                              onClick={() => push(this.defaultQuestion)}
                                            />
                                          </Accordion.Toggle>
                                          <Accordion.Collapse
                                            eventKey={(question, index + 1)}
                                          >
                                            <Card.Body>
                                              <QuestionHeader
                                                question={question}
                                                questionIndex={index}
                                                types={this.props.types}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                              />
                                              <QuestionDetail
                                                question={question}
                                                questionIndex={index}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                push={push}
                                                remove={remove}
                                                FieldArray={FieldArray}
                                                Field={Field}
                                                defaultAnswer={this.defaultAnswer}
                                                setFieldValue={setFieldValue}
                                                setFieldTouched={setFieldTouched}
                                              />
                                            </Card.Body>
                                          </Accordion.Collapse>
                                        </Fragment>
                                      </Card>
                                    ))}
                                  </div>
                                );
                              }}
                            </FieldArray>
                          )}
                        </Accordion>
                        <div className='text-center'>
                          <button type='submit' className='btn btn-primary btn-round m-2'>
                            Guardar
                          </button>
                          <button type='submit' className='btn btn-primary btn-round m-2'>
                            Actualizar
                          </button>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ evals }) => {
  return { types: evals.evalTypes };
};

export default compose(
  connect(mapStateToProps, { fetchEvaluacionesTypes, createEvalQuestion })
)(Questions);
