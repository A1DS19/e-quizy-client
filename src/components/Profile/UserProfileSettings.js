import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class UserProfileSettings extends Component {
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
              <nav className='nav' style={{ backgroundColor: 'transparent' }}>
                <Link to='/' className='nav-link active' style={{ color: 'white' }}>
                  <i className='fa fa-id-card-o' aria-hidden='true' />
                  Datos personales
                </Link>

                <Link to='/' className='nav-link active' style={{ color: 'white' }}>
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  Direcciones
                </Link>
              </nav>
              <div className='container'>
                <router-outlet>FORMS</router-outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileSettings;
