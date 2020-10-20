import { AUTH_ERROR, AUTH_USER, FETCH_USER, FETCH_ADDRESSES } from './types';
import axios from 'axios';

//AUTH ACTIONS INICIO:
export const signUp = (formValues, callback) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/Auth/SignUp', formValues);
      callback();
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.detail });
    }
  };
};

export const signIn = (formValues, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/Auth/SignIn', formValues);
      dispatch({ type: AUTH_USER, payload: res.data });
      localStorage.setItem('token', res.data);
      callback();
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data });
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
    const res = await axios.get('/api/Auth/userbytoken', {
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

      const res = await axios.post('/api/Auth/foto', formdata, {
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
      const res = await axios.put('/api/Auth/update', formValues, {
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
      const res = await axios.get('/api/Address', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      dispatch({ type: FETCH_ADDRESSES, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const insertAddress = (formValues, callback) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/Address/Create', formValues, {
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
  return async () => {
    try {
      await axios.delete(`/api/Address/${id}`);
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDireccionId = (id, callback) => {
  return async () => {
    try {
      const res = await axios.get(`/api/Address/${id}`);
      callback(res.data);
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateDireccion = (id, formValues, callback) => {
  return async () => {
    try {
      const res = await axios.put(`/api/Address/${id}`, formValues);
      console.log(res.data);
      callback();
    } catch (error) {
      console.log(error);
    }
  };
};
//DIRECCIONES FIN
