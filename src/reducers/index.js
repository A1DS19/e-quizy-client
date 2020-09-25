import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './Auth';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
});
