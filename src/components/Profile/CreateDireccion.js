import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorValidation from '../resources/ErrorValidation';
import { insertAddress, fetchAddresses } from '../../actions';

export class CreateDireccion extends Component {
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
              <h6 className='card-category'>Agregar dirección</h6>
              <p className='card-description'>Agrega una o varias direcciones</p>

              <Formik
                initialValues={{
                  typeAddressId: 1,
                  addressOne: '',
                  addressTwo: '',
                  otherSigns: '',
                  countrieId: 1,
                  stateId: 1,
                  cityName: '',
                  zipCode: '',
                }}
                validationSchema={this.validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  this.props.insertAddress(values, () => {
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
                    {console.log(values)}
                    <div className='row'>
                      <div className='col-md-6 col-sm-6'>
                        <div className='form-group'>
                          <label htmlFor='typeAddressId'>Tipo dirección</label>
                          <br />
                          <select
                            name='typeAddressId'
                            required='true'
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
                            required='true'
                            type='text'
                            className='form-control border-input'
                            placeholder='Calle avenida, nombre de condominio...'
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
                            required='true'
                            placeholder='Número de casa, apartamento...'
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
                            placeholder='Señas adicionales...'
                            required='true'
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
                            required='true'
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
                            required='true'
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
                            placeholder='Ciudad, barrio, urbanización...'
                            required='true'
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
                            placeholder='00000-0000'
                            required='true'
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
                        AGREGAR
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
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

export default compose(connect(mapStateToProps, { insertAddress, fetchAddresses }))(
  CreateDireccion
);
