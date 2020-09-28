import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUser } from '../../actions';

import DatosPersonales from './DatosPersonales';
import UserDireccion from './UserDireccion';

export class UserProfileSettings extends Component {
  state = {
    render: null,
  };

  onClickCard() {
    let render = this.state.render;
    if (render === null) {
      return null;
    }

    if (render === 'DATOS_PERSONALES') {
      return <DatosPersonales history={this.props.history} />;
    }

    if (render === 'DIRECCIONES') {
      return <UserDireccion history={this.props.history} />;
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div
          className='page-header section-dark'
          style={{
            backgroundImage: `url(${require('../../assets/img/sections/joshua-earles.jpg')})`,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div className='filter'></div>

          <div className='container' style={{ position: 'relative', zIndex: 1 }}>
            <div className='container'>
              <div className='title ml-0 pl-0' style={{ marginTop: '110px' }}>
                <h2 className='discover-title' style={{ color: 'white' }}>
                  Editar Perfíl
                </h2>
              </div>
              <ul className='nav' style={{ backgroundColor: 'transparent' }}>
                <li
                  onClick={() =>
                    this.onClickCard(this.setState({ render: 'DATOS_PERSONALES' }))
                  }
                  className='nav-link active'
                  style={{ color: 'white', cursor: 'pointer' }}
                >
                  <i className='fa fa-id-card-o' aria-hidden='true' />
                  Datos personales
                </li>

                <li
                  onClick={() =>
                    this.onClickCard(this.setState({ render: 'DIRECCIONES' }))
                  }
                  className='nav-link active'
                  style={{ color: 'white', cursor: 'pointer' }}
                >
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  Direcciones
                </li>
              </ul>
              <div className='container'>
                <router-outlet>{this.onClickCard(null)}</router-outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.currentUser };
};
export default connect(mapStateToProps, { fetchUser })(UserProfileSettings);
