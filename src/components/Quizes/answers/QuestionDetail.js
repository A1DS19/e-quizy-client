import React, { Fragment } from 'react';
import Answers from './Answers';
import Loader from 'components/resources/Loader';

function QuestionDetail({
  onChange,
  onBlur,
  question,
  FieldArray,
  questionIndex,
  push,
  remove,
  defaultAnswer,
}) {
  return (
    <div>
      {!question ? (
        <Loader />
      ) : (
        <div>
          <div className='row'>
            <h6 className='title pl-3 mb-1'>Pregunta</h6>
          </div>
          <div className='row mb-2'>
            <div className='form-group col-md-12'>
              <textarea
                component='textarea'
                name={`questions.${questionIndex}.name`}
                id='name'
                className='form-control'
                placeholder='La pregunta es...'
                rows='3'
                value={question.name}
                onChange={onChange}
                onBlur={onBlur}
              />
            </div>
          </div>

          <div className='row '>
            <h6 className='title pl-3 mb-0 pb-1'>
              Respuestas (selecciona la respuesta correcta)
            </h6>
          </div>
          <div className='row mt-2 mb-2'>
            <div className='form-group col-md-12'>
              {!question.answers ? (
                <Loader />
              ) : (
                <FieldArray name={`questions.${questionIndex}.answers`}>
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    return (
                      <Fragment>
                        {question.answers.map((a, index) => (
                          <div key={index} className='mb-4'>
                            <Answers
                              questionIndex={questionIndex}
                              answer={a}
                              onChange={onChange}
                              onBlur={onBlur}
                              index={index}
                              remove={remove}
                            />
                          </div>
                        ))}
                        <div className='form-group col-md-12'>
                          <label htmlFor='description'>
                            <i
                              onClick={() => push(defaultAnswer)}
                              className='fa fa-plus text-primary mr-1'
                              aria-hidden='true'
                              style={{ cursor: 'pointer', fontSize: '20px' }}
                            ></i>
                          </label>
                          <div
                            onClick={() => push(defaultAnswer)}
                            className='form-control pb-5'
                            style={{
                              borderStyle: 'dashed',
                              borderColor: 'rgb(195, 195, 195)',
                              backgroundColor: 'white',
                              cursor: 'pointer',
                              height: '10%',
                            }}
                          ></div>
                        </div>
                        ;
                      </Fragment>
                    );
                  }}
                </FieldArray>
              )}
            </div>
          </div>
          <div className='row '>
            <h6 className='title pl-3'>Puntos y tiempo de respuesta</h6>
          </div>
          <div className='row'>
            <div className='form-group col-md-6'>
              <label htmlFor='evaluationRules'> Puntos </label>
              <span className='font-weight-bold text-primary ml-2 mt-1 valueSpan'>
                {!question.questionPoints ? <Loader /> : question.questionPoints}
              </span>
              <input
                name='questionPoints'
                className='custom-range'
                type='range'
                min='0'
                max='100'
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='evaluationRules'>
                Tiempo para responder
                <span className='font-weight-bold text-primary ml-2 mt-1 valueSpan'>
                  {!question.questionTime ? <Loader /> : question.questionTime}
                </span>
                minuto(s)
              </label>

              <input
                name='questionPoints'
                className='custom-range'
                type='range'
                min='0'
                max='60'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionDetail;
