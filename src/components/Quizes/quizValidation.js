import * as Yup from 'yup';

export const quizSchema = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Debe agregar el nombre de la evaluacion'),
    categoryEvaluationId: Yup.string().required('Debe agregar la categoria de la prueba'),
    topicEvaluationId: Yup.string().required('Debe agregar la materia de la prueba'),
    typeEvaluationId: Yup.string().required('Debe agregar el tipo de evaluacion'),
    description: Yup.string().required('Debe agregar la decripccion de la evaluacion'),
    rules: Yup.string().required('Debe agregar las reglas de la evaluacion'),
  });
  return schema;
};
