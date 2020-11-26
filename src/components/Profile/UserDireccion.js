import './css/userDireccion.css';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import UpdateDireccion from './UpdateDireccion';
import CreateDireccion from './CreateDireccion';
import { fetchAddresses, deleteAddress } from '../../actions';
import { toast } from 'react-toastify';

export class UserDireccion extends Component {
  state = {
    render: null,
    updateId: null,
  };

  componentDidUpdate() {
    this.props.fetchAddresses();
  }

  renderAddresses = () => {
    return this.props.address.addressesListDTO.map((address) => {
      return (
        <tr key={address.id}>
          <td>{address.addressOne}</td>
          <td>{address.addressTwo}</td>
          <td>{address.otherSigns}</td>
          <td>{address.city.name}</td>
          <td>{this.renderAcciones(address.id)}</td>
        </tr>
      );
    });
  };

  onClickUpdate = () => {
    if (this.state.updateId !== null) {
      return (
        <UpdateDireccion
          id={this.state.updateId}
          history={this.props.history}
          onClose={this.onClose}
        />
      );
    }
  };

  onClickCreate = () => {
    return <CreateDireccion history={this.props.history} onClose={this.onClose} />;
  };

  onClickDelete = (id) => {
    this.props.deleteAddress(id, () => {
      this.props.fetchAddresses();
      toast.success('Direccion eliminada');
    });
  };

  decideRender = () => {
    let render = this.state.render;
    if (render === null) {
      return this.renderDefault();
    }
    if (render === 'CREATE') {
      return this.onClickCreate();
    }
    if (render === 'UPDATE') {
      return this.onClickUpdate();
    }
  };

  renderDefault = () => {
    return (
      <Fragment>
        <div className='container'>
          <div className='card-category'>
            <h3 style={{ color: 'white' }}>Direcciones</h3>
          </div>
          <div className='mat-elevation-z8 mt-3'>
            <Table responsive>
              <thead style={{ color: 'white' }}>
                <tr>
                  <th>Dirección uno</th>
                  <th>Dirección dos</th>
                  <th>Otras señas</th>
                  <th>Ciudad</th>
                  <th>
                    Acciones{' '}
                    <i
                      className='fa fa-plus-circle'
                      style={{ fontSize: '20px', float: 'right' }}
                      onClick={() =>
                        this.onClickCreate(this.setState({ render: 'CREATE' }))
                      }
                    />
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: 'white' }}>{this.renderAddresses()}</tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    );
  };

  onClose = () => {
    this.setState({ render: null });
  };

  renderAcciones = (id) => {
    return (
      <div className='text-center'>
        <i
          className='fa fa-pencil-square-o text-danger'
          onClick={() =>
            this.onClickUpdate(this.setState({ updateId: id, render: 'UPDATE' }))
          }
        />
        <i
          className='fa fa-trash ml-2 text-danger'
          onClick={() => this.onClickDelete(id)}
        />
      </div>
    );
  };

  render() {
    return <Fragment>{this.decideRender()}</Fragment>;
  }
}
const mapStateToProps = (state) => {
  return { address: state.user.userAddresses };
};
export default connect(mapStateToProps, { fetchAddresses, deleteAddress })(UserDireccion);
