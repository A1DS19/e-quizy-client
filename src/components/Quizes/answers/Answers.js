import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

function Answers({
  remove,
  index,
  onChange,
  onBlur,
  answer,
  questionIndex,
  onClickCorrect,
  setFieldValue,
  setFieldTouched,
}) {
  return (
    <Fragment>
      <label htmlFor='description' className='d-flex justify-content-between'>
        <i
          onClick={() => {
            setFieldValue(`questions.${questionIndex}.answers.${index}.correct`, 1, true);
            setFieldTouched(
              `questions.${questionIndex}.answers.${index}.correct`,
              true,
              false
            );
          }}
          className={`${
            answer.correct === 0 ? 'fa fa-square-o' : 'fa fa-check-square-o'
          } text-primary`}
          name={`questions.${questionIndex}.answers.${index}.correct`}
          aria-hidden='true'
          style={{
            cursor: 'pointer',
            fontSize: '20px',
            width: '30%',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              color: 'black',
              fontFamily: 'Montserrat,Helvetica,Arial,sans-serif',
              fontSize: '18px',
            }}
          >
            Correcto
          </span>
        </i>
        <i
          onClick={() => {
            setFieldValue(`questions.${questionIndex}.answers.${index}.correct`, 0, true);
            setFieldTouched(
              `questions.${questionIndex}.answers.${index}.correct`,
              true,
              false
            );
          }}
          className={`${
            answer.correct === 1 ? 'fa fa-square-o' : 'fa fa-check-square-o'
          } text-primary`}
          name={`questions.${questionIndex}.answers.${index}.correct`}
          aria-hidden='true'
          style={{
            cursor: 'pointer',
            fontSize: '20px',
            width: '30%',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              color: 'black',
              fontFamily: 'Montserrat,Helvetica,Arial,sans-serif',
              fontSize: '18px',
            }}
          >
            Incorrecto
          </span>
        </i>

        <i
          onClick={() =>
            index === 0
              ? toast.warning('Debe existir al menos una respuesta!')
              : remove(index)
          }
          className='fa fa-minus text-primary'
          aria-hidden='true'
          style={{ cursor: 'pointer', fontSize: '20px' }}
        ></i>
      </label>
      <textarea
        name={`questions.${questionIndex}.answers.${index}.answerContent`}
        placeholder='Agregue una respuesta...'
        className='form-control'
        rows='1'
        onChange={onChange}
        onBlur={onBlur}
        value={answer.answerContent}
      ></textarea>
    </Fragment>
  );
}

export default Answers;
