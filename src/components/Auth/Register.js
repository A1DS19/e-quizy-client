import React, { Component, Fragment } from 'react';
import { Button, Card, Form, Input, Container, Row, Col, Alert } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import * as emailValidate from 'email-validator';

export class Register extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  renderError({ error, touched }) {
    if (error && touched) {
      return <Alert color='danger'>{error}</Alert>;
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    return (
      <Fragment>
        <label>{label}</label>
        <Input {...input} autoComplete='off' type={type} />
        {this.renderError(meta)}
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        <div
          className='page-header'
          style={{
            backgroundImage: `url(${require('../../assets/img/sections/soroush-karimi.jpg')})`,
          }}
        >
          <div className='filter' />
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' lg='4'>
                <Card className='card-register ml-auto mr-auto'>
                  <h3 className='title mx-auto'>Registrese</h3>

                  <Form
                    className='register-form'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                  >
                    <Field
                      name='email'
                      type='text'
                      component={this.renderInput}
                      label='Email'
                    />

                    <Field
                      name='password'
                      type='password'
                      component={this.renderInput}
                      label='Contrasena'
                    />

                    <Field
                      name='confirmPassword'
                      type='password'
                      component={this.renderInput}
                      label='Confirmar Contrasena'
                    />

                    <Button block className='btn-round' color='danger'>
                      Registrarme
                    </Button>
                  </Form>

                  <div className='forgot'>
                    <a href='#' style={{ color: 'white' }}>
                      Olvido su contrasena?
                    </a>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

const validate = (formValues) => {
  const { email, password, confirmPassword } = formValues;
  const errors = {};

  if (!email) {
    errors.email = 'Porfavor ingrese un email';
  }
  if (email && !emailValidate.validate(email)) {
    errors.email = 'Porfavor ingrese un email correcto';
  }
  if (!password) {
    errors.password = 'Porfavor ingrese una contrasena';
  }
  if (!confirmPassword) {
    errors.confirmPassword = 'Debe confirmar la contrasena';
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contrasenas deben ser iguales';
    errors.password = 'Las contrasenas deben ser iguales';
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'registerForm',
})(Register);
