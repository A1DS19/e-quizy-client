import './css/datosPersonales.css';
import React, { Component, Fragment } from 'react';
import { Alert, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { updateImgState, updatePersonalData, fetchUser } from '../../actions';

export class DatosPersonales extends Component {
  state = {
    file: null,
    img: this.props.user.image,
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  onSubmit = (formValues) => {
    const newFormValues = { ...formValues };
    newFormValues.id = this.props.user.id;
    newFormValues.RoleName = this.props.user.roleName;
    newFormValues.image = this.props.user.image;
    newFormValues.password = this.props.user.password;

    console.log(newFormValues);
    this.props.updatePersonalData(newFormValues, () => {
      this.props.history.push('/profile/user_profile');
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

  onFileChange = (event) => {
    //Solo se toma un archivo con [0]
    this.setState({ file: event.target.files[0] }, () => {
      this.props.updateImgState(this.state.file, () => {
        this.setState({ img: this.props.user.image });
      });
    });
  };

  render() {
    return (
      <div>
        {' '}
        <div
          className='card card-plain '
          style={{
            backgroundImage: `url(${require('../../assets/img/sections/david-marcu.jpg')})`,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div className='container'>
            <div
              className='col-md-12 ml-auto mr-auto'
              style={{ position: 'relative', zIndex: 1 }}
            >
              <form
                className='settings-form'
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                style={{ color: 'white' }}
              >
                <div className='row'>
                  <h3 className='title pl-2 mt-0'>Información personal</h3>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        name='firstName'
                        required={true}
                        type='text'
                        className='form-control border-input'
                        label='Primer Nombre'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.firstName}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        name='secondName'
                        required={false}
                        type='text'
                        className='form-control border-input'
                        label='Segundo nombre'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.secondName}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        name='lastName'
                        required={true}
                        type='text'
                        className='form-control border-input'
                        label='Primer Apellido'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.lastName}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        name='secondLastName'
                        required={false}
                        type='text'
                        className='form-control border-input'
                        label='Segundo Apellido'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.secondLastName}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        name='email'
                        required={true}
                        type='text'
                        className='form-control border-input'
                        label='Email'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.email}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        className='form-control border-input'
                        required={false}
                        type='telephone'
                        name='telephone'
                        label='Teléfono'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.telephone}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3'>
                    <div className='form-group'>
                      <Field
                        name='dateOfBirth'
                        type='date'
                        className='form-control border-input'
                        required={true}
                        label='Fecha de nacimiento'
                        component={this.renderInput}
                        placeholder={this.props.initialValues.dateOfBirth}
                        onFocus={(e) => {
                          e.currentTarget.type = 'date';
                          e.currentTarget.focus();
                        }}
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-3 text-center'>
                    <div>
                      <label htmlFor='image'>Imagen de Perfil</label>
                    </div>
                    <div>
                      <img
                        name='image'
                        className='avatar_edit'
                        src={
                          this.state.img !== null
                            ? this.state.img
                            : `${require('../../assets/img/faces/no-avatar.png')}`
                        }
                        alt=''
                      />
                    </div>
                    <label
                      htmlFor='file'
                      className='btn btn-round text-center'
                      style={{ backgroundColor: 'transparent', marginTop: '8px' }}
                    >
                      Buscar
                    </label>
                    <input
                      onChange={this.onFileChange.bind(this)}
                      type='file'
                      id='file'
                      accept='image/*'
                      style={{ visibility: 'hidden' }}
                    />
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='btn btn-wd btn-danger btn-round'
                    style={{ marginBottom: '8px' }}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
    initialValues: {
      firstName: state.user.currentUser.firstName,
      secondName: state.user.currentUser.secondName,
      dateOfBirth: state.user.currentUser.dateOfBirth,
      lastName: state.user.currentUser.lastName,
      email: state.user.currentUser.email,
      secondLastName: state.user.currentUser.secondLastName,
      telephone: state.user.currentUser.telephone,
    },
  };
};

export default compose(
  connect(mapStateToProps, { updateImgState, updatePersonalData, fetchUser }),
  reduxForm({
    form: 'updateProfile',
    enableReinitialize: true,
  })
)(DatosPersonales);
