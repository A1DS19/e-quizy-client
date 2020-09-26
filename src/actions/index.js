import { AUTH_ERROR, AUTH_USER } from './types';
import axios from 'axios';

export const signUp = (formValues, callback) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/accounts/create', formValues);
      callback();
    } catch (error) {
      console.log(`ERROR AUTENTICACION:${error}`);
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const signIn = (formValues, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/accounts/login', formValues);
      dispatch({ type: AUTH_USER, payload: res.data.token });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('currentUser', res.data.user);
      callback();
      console.log(res);
    } catch (error) {
      console.log(`ERROR AUTENTICACION:${error}`);
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const signOut = (callback) => {
  return (dispatch) => {
    dispatch({ type: AUTH_USER, payload: '' });
    localStorage.removeItem('token');
    localStorage.removeItem('currrentUser');
    callback();
  };
};
