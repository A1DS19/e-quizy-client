import React, { Component, Fragment } from 'react';
import { Button, Card, Form, Input, Container, Row, Col, Alert } from 'reactstrap';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import * as emailValidate from 'email-validator';
import { connect } from 'react-redux';
import { signUp } from '../../actions';

export class Register extends Component {
  onSubmit = (formValues) => {
    this.props.signUp(formValues, () => {
      console.log(formValues);
      this.props.history.push('/auth/login');
    });
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
                  {this.props.errorMessage ? (
                    <Alert color='danger'>{this.props.errorMessage}</Alert>
                  ) : null}
                  <Form
                    className='register-form'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                  >
                    <label>Tipo de perfil</label>
                    <br />
                    <Field name='roleName' component='select' className='form-control'>
                      <option disabled={true} defaultChecked={true}></option>
                      <option value='PROFESOR'>Profesor</option>
                      <option value='ESTUDIANTE'>Estudiante</option>
                    </Field>

                    <Field
                      name='email'
                      type='text'
                      component={this.renderInput}
                      label='Email'
                    />

                    <Field
                      name='firstName'
                      type='text'
                      component={this.renderInput}
                      label='Nombre'
                    />

                    <Field
                      name='lastName'
                      type='text'
                      component={this.renderInput}
                      label='Primer Apellido'
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
                    <p style={{ color: 'white' }}>Olvido su contrasena?</p>
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

const validate = (formValues, props) => {
  const { email, password, confirmPassword, roleName, firstName, lastName } = formValues;
  const errors = {};

  if (!roleName) {
    errors.roleName = 'Porfavor escoja el tipo de perfil';
  }
  if (!firstName) {
    errors.firstName = 'Porfavor ingrese su nombre';
  }
  if (!lastName) {
    errors.lastName = 'Porfavor ingrese su apellido';
  }
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
  if (confirmPassword !== password) {
    errors.confirmPassword = 'Las contrasenas deben ser iguales';
  }
  return errors;
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, { signUp }),
  reduxForm({
    validate,
    form: 'registerForm',
  })
)(Register);
