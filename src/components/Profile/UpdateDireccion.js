import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateDireccion, getDireccionId, fetchAddresses } from '../../actions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorValidation from '../resources/ErrorValidation';

export class UpdateDireccion extends Component {
  state = {
    userAddress: null,
  };

  componentDidMount() {
    this.props.fetchAddresses();
    this.props.getDireccionId(this.props.id, (data) => {
      this.setState({ userAddress: data });
    });
  }

  validationSchema = Yup.object().shape({
    typeAddressId: '',
    addressOne: Yup.string().required('Debe la direccion uno'),
    addressTwo: Yup.string().required('Debe la direccion dos'),
    otherSigns: Yup.string().required('Debe agregar por lo menos una senal'),
    countrieId: '',
    stateId: '',
    cityName: Yup.string().required('Debe agregar una ciudad'),
    zipCode: Yup.string()
      .required('Debe agregar el codigo postal')
      .min(5, 'El codigo postal no puede tener menos de 4 digitos'),
  });

  render() {
    return (
      <div>
        <div
          className='card card-plain'
          style={{
            backgroundImage: `url(${require('../../assets/img/sections/david-marcu.jpg')})`,
          }}
        >
          <div className='container'>
            <i
              onClick={this.props.onClose}
              className='fa fa-times-circle mt-3'
              style={{ fontSize: '20px', float: 'right' }}
            />
          </div>
          <div className='container' style={{ color: 'white' }}>
            <div className='col-md-12 ml-auto mr-auto'>
              <h6 className='card-category'>Actualizar dirección</h6>
              <p className='card-description'>Actualize su direccion</p>

              {this.state.userAddress !== null ? (
                <Formik
                  initialValues={{
                    typeAddressId: 1,
                    addressOne: this.state.userAddress.addressOne,
                    addressTwo: this.state.userAddress.addressTwo,
                    otherSigns: this.state.userAddress.otherSigns,
                    countrieId: 1,
                    stateId: 2,
                    cityName: this.state.userAddress.city.name,
                    zipCode: this.state.userAddress.zipCode,
                  }}
                  validationSchema={this.validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    console.log(values);
                    this.props.updateDireccion(this.state.userAddress.id, values, () => {
                      this.props.onClose();
                    });
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form className='settings-form' onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='typeAddressId'>Tipo dirección</label>
                            <br />
                            <select
                              name='typeAddressId'
                              className='form-control border-input'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.typeAddressId}
                            >
                              <option selected='true' disabled='disabled'>
                                Tipo
                              </option>

                              {this.props.address.typeAddressesDTO.map((type) => (
                                <option key={type.id} value={type.id}>
                                  {type.type}
                                </option>
                              ))}
                            </select>
                            {
                              <ErrorValidation
                                touched={touched.typeAddressId}
                                message={errors.typeAddressId}
                              />
                            }
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='addressOne'>Direccion Uno</label>
                            <input
                              name='addressOne'
                              type='text'
                              className='form-control border-input'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.addressOne}
                            />
                            <ErrorValidation
                              touched={touched.addressOne}
                              message={errors.addressOne}
                            />
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='addressTwo'>Direccion Dos</label>
                            <input
                              name='addressTwo'
                              type='text'
                              className='form-control border-input'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.addressTwo}
                            />
                            <ErrorValidation
                              touched={touched.addressTwo}
                              message={errors.addressTwo}
                            />
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='otherSigns'>Señas adicionales</label>
                            <input
                              name='otherSigns'
                              type='text'
                              className='form-control border-input'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.otherSigns}
                            />
                            <ErrorValidation
                              touched={touched.otherSigns}
                              message={errors.otherSigns}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='countrieId'>País</label>
                            <select
                              className='form-control border-input'
                              name='countrieId'
                              component='select'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.countrieId}
                            >
                              <option selected='true' disabled>
                                País
                              </option>

                              {this.props.address.countriesListDTO.map((array) => (
                                <option key={array.id} value={array.id}>
                                  {array.name}
                                </option>
                              ))}
                            </select>
                            <ErrorValidation
                              touched={touched.countrieId}
                              message={errors.countrieId}
                            />
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='stateId'>Provincia / Estado</label>
                            <select
                              name='stateId'
                              className='form-control border-input'
                              component='select'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.stateId}
                            >
                              <option selected='true' disabled>
                                Provincia / Estado
                              </option>

                              {this.props.address.countriesListDTO.map((countrie) =>
                                countrie.statesProvinces.map((city) => (
                                  <option key={city.id} value={city.id}>
                                    {city.name}
                                  </option>
                                ))
                              )}
                            </select>
                            <ErrorValidation
                              touched={touched.stateId}
                              message={errors.stateId}
                            />
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='cityName'>Ciudad</label>
                            <input
                              name='cityName'
                              type='text'
                              className='form-control border-input'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cityName}
                            />
                            <ErrorValidation
                              touched={touched.cityName}
                              message={errors.cityName}
                            />
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                          <div className='form-group'>
                            <label htmlFor='zipCode'>Codigo Postal</label>
                            <input
                              name='zipCode'
                              type='text'
                              className='form-control border-input'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.zipCode}
                            />
                            <ErrorValidation
                              touched={touched.zipCode}
                              message={errors.zipCode}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <button
                          type='submit'
                          className='btn btn-wd btn-danger btn-round'
                          style={{ marginBottom: '8px' }}
                        >
                          ACTUALIZAR
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              ) : (
                'Loading'
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { address: state.user.userAddresses };
};

export default compose(
  connect(mapStateToProps, { updateDireccion, getDireccionId, fetchAddresses })
)(UpdateDireccion);
