import {
  FETCH_EVALS_TYPES,
  EVALS_ERROR,
  LOADING_QUIZES,
  FECTH_QUIZES,
  FETCH_SELECTED_QUIZ,
  FETCH_EVAL_QUESTION,
} from '../actions/types';

const initialState = {
  loading: true,
  evalsList: [],
  evalTypes: [],
  eval: {},
  evalQuestions: {},
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_QUIZES:
      return { loading: true };
    case FETCH_SELECTED_QUIZ:
      return { ...state, loading: false, eval: action.payload };
    case FECTH_QUIZES:
      return { ...state, loading: false, evalsList: action.payload };
    case FETCH_EVALS_TYPES:
      return { ...state, loading: false, evalTypes: action.payload };
    case FETCH_EVAL_QUESTION:
      return { ...state, loading: false, evalQuestions: action.payload };
    case EVALS_ERROR:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};
