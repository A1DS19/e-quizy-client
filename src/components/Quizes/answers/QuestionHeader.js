import React, { Fragment } from 'react';
import Loader from '../../resources/Loader';

function QuestionHeader({ question, types, questionIndex, onChange, onBlur }) {
  return (
    <Fragment>
      {!types ? (
        <Loader />
      ) : (
        <div>
          <div className='row'>
            <div className='col-md-4 form-group'>
              <label htmlFor='categoryQuestion'> Categoría</label>
              <select
                name={`questions.${questionIndex}.categoryQuestionId`}
                className='form-control'
                onChange={onChange}
                value={question.categoryQuestion && question.categoryQuestion.id}
                onBlur={onBlur}
              >
                <option selected disabled>
                  Selecciona una categoría...
                </option>

                {types.categoriesEvaluation?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-4 form-group'>
              <label htmlFor='topicQuestion'> Materia</label>
              <select
                name={`questions.${questionIndex}.topicQuestionId`}
                className='form-control'
                id='exampleFormControlSelect1'
                onChange={onChange}
                value={question.topicQuetion && question.topicQuetion.id}
                onBlur={onBlur}
              >
                <option selected disabled>
                  Selecciona una materia...
                </option>

                {types.topicsEvaluation?.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.topic}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-4 form-group'>
              <label htmlFor='typeQuestion'>Tipo de pregunta</label>
              <select
                name={`questions.${questionIndex}.typeQuestionId`}
                className='form-control'
                id='exampleFormControlSelect1'
                value={question.typeQuestion && question.typeQuestion.id}
                onChange={onChange}
                onBlur={onBlur}
              >
                <option selected disabled>
                  Selecciona un tipo de pregunta...
                </option>

                {types.typesEvaluation?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default QuestionHeader;
