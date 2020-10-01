import {
  AUTH_ERROR,
  AUTH_USER,
  FETCH_USER,
  FETCH_ADDRESSES,
  REMOVE_ADDRESSES,
  ADD_ADDRESS,
} from './types';
import axios from 'axios';

//AUTH ACTIONS INICIO:
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
      callback();
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
    callback();
  };
};
//AUTH ACTIONS FIN

//USER ACTIONS INICIO:
export const fetchUser = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/accounts/userbytoken', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    console.log(res.data);
    res.data.dateOfBirth = JSON.stringify(res.data.dateOfBirth).slice(1, 11);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const updateImgState = (img, callback) => {
  return async (dispatch) => {
    try {
      const formdata = new FormData();
      formdata.append('img', img);

      const res = await axios.post('/api/accounts/foto', formdata, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      dispatch({ type: FETCH_USER, payload: res.data });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePersonalData = (formValues, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.put('/api/accounts/update', formValues, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      console.log(res);
      dispatch({ type: FETCH_USER, payload: res.data });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};
//USER ACTIONS FIN

//DIRECCIONES INICIO
export const fetchAddresses = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/address', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      console.log(res.data);
      dispatch({ type: FETCH_ADDRESSES, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const insertAddress = (formValues, callback) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/address/create', formValues, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAddress = (id, callback) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/address/${id}`);
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};
