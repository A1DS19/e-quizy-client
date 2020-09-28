import React, { Component, Fragment } from 'react';
require('./css/userDireccion.css');

export class UserDireccion extends Component {
  render() {
    return (
      <Fragment>
        DIRECCION
        {/* <div>
          <div
            className='card card-plain'
            data-background='image'
            style={{
              backgroundImage: `url(${require('../../assets/img/sections/david-marcu.jpg')})`,
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div className='container'>
              <i
                className='fa fa-times-circle mt-3'
                aria-hidden='true'
                style={{ fontSize: '20px;', float: 'right' }}
              ></i>
            </div>
            <div className='container'>
              <div className='col-md-12 ml-auto mr-auto'>
                <h6 className='card-category'>Agregar dirección</h6>
                <p className='card-description'>Agrega una o varias direcciones</p>
                <form className='settings-form'>
                  <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label for='country'>Tipo dirección</label>
                        <select
                          className='form-control border-input'
                          name='typeAddress'
                          id=''
                          required='true'
                        >
                          <option value='0' selected='true' disabled='true'>
                            Tipo
                          </option>

                          <option value="{'type.id' }">{'{ type.type }'}</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label for='addressOne'>Dirección uno</label>
                        <input
                          name='addressOne'
                          required='true'
                          type='text'
                          className='form-control border-input'
                          placeholder='Calle avenida, nombre de condominio...'
                        />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label>Dirección dos</label>
                        <input
                          name='addressTwo'
                          type='text'
                          className='form-control border-input'
                          placeholder='Número de casa, apartamento...'
                        />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label>Otras señas</label>
                        <input
                          name='otherSigns'
                          type='text'
                          className='form-control border-input'
                          placeholder='Señas adicionales...'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label for='country'>País</label>
                        <select
                          class='form-control border-input'
                          name='country'
                          required='true'
                        >
                          <option value='0' selected='true' disabled='true'>
                            País
                          </option>
                          <option value='{{ country.id }}'>{'country.name'}</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label for='stateProcince'>Provincia / Estado</label>
                        <select
                          name='stateName'
                          className='form-control border-input'
                          name='stateProcince'
                          required='true'
                        >
                          <option value='0' selected='true' disabled='true'>
                            Provincia / Estado
                          </option>
                          <option value='{{ st.id }}'>{'st.name'}</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label>Ciudad</label>
                        <input
                          name='cityName'
                          type='text'
                          className='form-control border-input'
                          placeholder='Ciudad, barrio, urbanización...'
                          required='true'
                        />
                      </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                      <div className='form-group'>
                        <label>Código postal</label>
                        <input
                          name='zipCode'
                          type='number'
                          className='form-control border-input'
                          placeholder='00000-0000'
                          required='true'
                        />
                      </div>
                    </div>
                  </div>
                  <div class='text-center'>
                    <button type='submit' className='btn btn-wd btn-danger btn-round'>
                      Agregar
                    </button>
                  </div>
                  <div>
                    <button type='button' class='btn btn-wd btn-danger btn-round mr-2'>
                      Actualizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class='container'>
            <div class='card-category'>
              <h3>Direcciones</h3>
            </div>
            <div class='mat-elevation-z8 mt-3'>
              <table mat-table>
                <ng-container matColumnDef='adOne'>
                  <th mat-header-cell>Dirección uno</th>
                  <td mat-cell>{'{ add.addressOne }'}</td>
                </ng-container>

                <ng-container matColumnDef='addTwo'>
                  <th mat-header-cell>Dirección dos</th>
                  <td mat-cell>{'{ add.addressTwo }'}</td>
                </ng-container>

                <ng-container matColumnDef='otherSigns'>
                  <th mat-header-cell>Otras señas</th>
                  <td mat-cell>{'{ add.otherSigns }'}</td>
                </ng-container>

                <ng-container matColumnDef='city'>
                  <th mat-header-cell>Ciudad</th>
                  <td mat-cell>{'{ add.city.name }'}</td>
                </ng-container>

                <ng-container matColumnDef='actions'>
                  <th class='text-center' mat-header-cell>
                    Acciones
                    <i
                      class='fa fa-plus-circle'
                      aria-hidden='true'
                      style={{ fontSize: '20px', float: 'right' }}
                    ></i>
                  </th>
                  <td mat-cell='let element'>
                    <div class='text-center'>
                      <i class='fa fa-pencil-square-o text-danger' aria-hidden='true'></i>
                      <i class='fa fa-trash ml-2 text-danger' aria-hidden='true'></i>
                    </div>
                  </td>
                </ng-container>

                <tr mat-header-row></tr>
                <tr mat-row></tr>
              </table>
            </div>
          </div>
        </div> */}
      </Fragment>
    );
  }
}

export default UserDireccion;
