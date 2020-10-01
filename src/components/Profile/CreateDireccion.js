import React, { Component, Fragment } from 'react';
import { Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { insertAddress, fetchAddresses } from '../../actions';

export class CreateDireccion extends Component {
  onSubmit = (formValues) => {
    this.props.insertAddress(formValues, () => {
      this.props.onClose();
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
    console.log(this.props.address);
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

              <form
                className='settings-form'
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <label>Tipo dirección</label>
                      <br />
                      <Field
                        name='typeAddressId'
                        required
                        component='select'
                        className='form-control border-input'
                      >
                        <option disabled>Tipo</option>

                        {this.props.address.typeAddressesDTO.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.type}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <Field
                        name='addressOne'
                        required
                        type='text'
                        className='form-control border-input'
                        placeholder='Calle avenida, nombre de condominio...'
                        component={this.renderInput}
                        label='Dirección uno'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <Field
                        name='addressTwo'
                        type='text'
                        className='form-control border-input'
                        placeholder='Número de casa, apartamento...'
                        component={this.renderInput}
                        label='Dirección dos'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <Field
                        name='otherSigns'
                        type='text'
                        className='form-control border-input'
                        placeholder='Señas adicionales...'
                        component={this.renderInput}
                        label='Otras señas'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <label>País</label>
                      <br />
                      <Field
                        className='form-control border-input'
                        name='countrieId'
                        required
                        component='select'
                      >
                        <option disabled>País</option>
                        {this.props.address.countriesListDTO.map((array) => (
                          <option key={array.id} value={array.id}>
                            {array.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <label>Provincia / Estado</label>
                      <br />
                      <Field
                        name='stateId'
                        className='form-control border-input'
                        required
                        component='select'
                      >
                        <option disabled>Provincia / Estado</option>
                        {this.props.address.countriesListDTO.map((countrie) =>
                          countrie.statesProvinces.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <Field
                        name='cityName'
                        type='text'
                        className='form-control border-input'
                        placeholder='Ciudad, barrio, urbanización...'
                        required
                        component={this.renderInput}
                        label='Ciudad'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='form-group'>
                      <Field
                        name='zipCode'
                        type='text'
                        className='form-control border-input'
                        placeholder='00000-0000'
                        required
                        label='Código postal'
                        component={this.renderInput}
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
  connect(mapStateToProps, { insertAddress, fetchAddresses }),
  reduxForm({
    form: 'createDireccion',
  })
)(CreateDireccion);
