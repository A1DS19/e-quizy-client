import React, { Component, Fragment } from 'react';
import { Button, Card, Form, Input, Container, Row, Col } from 'reactstrap';

export class Login extends Component {
  render() {
    return (
      <Fragment>
        <div
          class='page-header'
          style={{
            backgroundImage: `url(${require('../../assets/img/sections/bruno-abatti.jpg')})`,
          }}
        >
          <div className='filter' />
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' lg='4'>
                <Card className='card-register ml-auto mr-auto'>
                  <h3 className='title mx-auto'>Welcome</h3>

                  <Form className='register-form'>
                    <label>Email</label>
                    <Input placeholder='Email' type='text' />
                    <label>Contrasena</label>
                    <Input placeholder='Contrasena' type='password' />
                    <Button block className='btn-round' color='danger'>
                      Register
                    </Button>
                  </Form>
                  <div className='forgot'></div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Login;
