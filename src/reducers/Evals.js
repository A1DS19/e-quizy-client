import { FETCH_EVALS_TYPES, EVALS_ERROR } from '../actions/types';

const initialState = {
  evalTypes: [],
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVALS_TYPES:
      return { ...state, evalTypes: action.payload };
    case EVALS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
