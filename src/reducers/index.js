import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './Auth';
import userReducer from './User';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  user: userReducer,
});
