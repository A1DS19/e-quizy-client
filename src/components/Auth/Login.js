import React, { Component, Fragment } from 'react';
import { Button, Card, Form, Input, Container, Row, Col, Alert } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import * as emailValidate from 'email-validator';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

export class Login extends Component {
  onSubmit = (formValues) => {
    this.props.signIn(formValues, () => {
      this.props.history.push('/');
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
            backgroundImage: `url(${require('../../assets/img/sections/bruno-abatti.jpg')})`,
          }}
        >
          <div className='filter' />
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' lg='4'>
                <Card className='card-register ml-auto mr-auto'>
                  <h3 className='title mx-auto'>Login</h3>
                  {this.props.errorMessage ? (
                    <Alert color='danger'>{this.props.errorMessage}</Alert>
                  ) : null}
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
                    <Button block className='btn-round' color='danger'>
                      Register
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
  const { email, password } = formValues;
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
  return errors;
};

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, { signIn }),
  reduxForm({
    validate,
    form: 'login',
  })
)(Login);
