import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

function Answers({ remove, index, onChange, onBlur, answer, questionIndex }) {
  return (
    <Fragment>
      <label htmlFor='description' className='d-flex justify-content-between'>
        <i
          className='fa fa-square-o text-primary'
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
            Respuesta {index + 1}
          </span>
        </i>
        <i
          className='fa fa-check-square-o text-primary'
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
            Respuesta {index + 1}
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
        name={`questions.${questionIndex}.answers.${index}.answer`}
        placeholder='Agregue una respuesta...'
        className='form-control'
        rows='1'
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
    </Fragment>
  );
}

export default Answers;
