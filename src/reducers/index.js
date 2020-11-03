import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './Auth';
import userReducer from './User';
import evalsReducer from './Evals';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  user: userReducer,
  evals: evalsReducer,
});
