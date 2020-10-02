import React from 'react';
import { Alert } from 'reactstrap';

const ErrorValidation = ({ touched, message }) => {
  if (!touched) {
    return '';
  }

  if (message) {
    return <Alert color='danger'>{message}</Alert>;
  }

  return '';
};

export default ErrorValidation;
