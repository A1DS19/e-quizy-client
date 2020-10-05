import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { signOut, fetchUser } from '../../actions';
import { connect } from 'react-redux';

import ReactTooltip from 'react-tooltip';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export class IndexNavbar extends Component {
  state = {
    collapsed: true,
    navbarColor: 'navbar-transparent',
  };

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed });
    document.documentElement.classList.toggle('nav-open');
  };

  updateNavbarColor = () => {
    if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
      this.setState({ navbarColor: '' });
      document.getElementById('nav-title').style.color = 'gray';
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({ navbarColor: 'navbar-transparent' });
      document.getElementById('nav-title').style.color = 'white';
    }
  };

  componentDidUpdate() {
    window.addEventListener('scroll', this.updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', this.updateNavbarColor);
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  renderNavNoAuth() {
    return (
      <Fragment>
        <NavItem>
          <NavLink data-placement='bottom'>
            <Link to='/auth/register'>
              <i className='fa fa-user-plus' style={{ color: 'gray' }} />
              <p className='d-lg-none' style={{ color: 'gray' }}>
                Registro
              </p>
            </Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink data-placement='bottom'>
            <Link to='/auth/login'>
              <i className='fa fa-sign-in' style={{ color: 'gray' }} />
              <p className='d-lg-none' style={{ color: 'gray' }}>
                Login
              </p>
            </Link>
          </NavLink>
        </NavItem>
      </Fragment>
    );
  }

  renderNavAuth() {
    return (
      <Fragment>
        <NavItem>
          <NavLink data-placement='bottom'>
            <Link to='/' style={{ color: 'gray' }}>
              <i
                className='fa fa-plus-square'
                id='crearPrueba'
                data-tip
                data-for='crear'
              />
              <ReactTooltip
                id='crear'
                type='light'
                place='bottom'
                effect='solid'
                className='font-weight-bold'
              >
                Crear Prueba
              </ReactTooltip>
              <p className='d-lg-none'>Crear Prueba</p>
            </Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink data-placement='bottom'>
            <Link to='/' style={{ color: 'gray' }}>
              <i className='fa fa-eye' id='verPrueba' data-tip data-for='ver' />
              <ReactTooltip
                id='ver'
                type='light'
                place='bottom'
                effect='solid'
                className='font-weight-bold'
              >
                Ver Pruebas
              </ReactTooltip>
              <p className='d-lg-none'>Ver Pruebas</p>
            </Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink data-placement='bottom'>
            <Link to='/' style={{ color: 'gray' }}>
              <i className='fa fa-file' id='verRespuestas' data-tip data-for='verRes' />
              <ReactTooltip
                id='verRes'
                type='light'
                place='bottom'
                effect='solid'
                className='font-weight-bold'
              >
                Ver Respuestas
              </ReactTooltip>
              <p className='d-lg-none'>Ver Respuestas</p>
            </Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink data-placement='bottom'>
            <Link to='/profile/user_profile' style={{ color: 'gray' }}>
              <i className='fa fa-id-card-o' id='miPerfil' data-tip data-for='perfil' />
              <ReactTooltip
                id='perfil'
                type='light'
                place='bottom'
                effect='solid'
                className='font-weight-bold'
              >
                Mi Perfil
              </ReactTooltip>
              <p className='d-lg-none'>Mi Perfil</p>
            </Link>
          </NavLink>
        </NavItem>

        <NavItem onClick={this.signOut}>
          <NavLink data-placement='bottom' href='/' style={{ color: 'gray' }}>
            <i className='fa fa-sign-out' id='salir' data-tip data-for='salir' />
            <ReactTooltip
              id='salir'
              type='light'
              place='bottom'
              effect='solid'
              className='font-weight-bold'
            >
              Salir
            </ReactTooltip>
            <p className='d-lg-none'>Salir</p>
          </NavLink>
        </NavItem>
      </Fragment>
    );
  }

  validateAuth = (authenticated) => {
    if (authenticated) {
      return this.renderNavAuth();
    }
    return this.renderNavNoAuth();
  };

  signOut = () => {
    this.props.signOut(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar className={classnames('fixed-top', this.state.navbarColor)} expand='lg'>
          <Container>
            <div className='navbar-translate'>
              <NavbarBrand data-placement='bottom'>
                <Link to='/'>
                  <h5 id='nav-title' style={{ color: 'white' }}>
                    e-quizy
                  </h5>
                </Link>
              </NavbarBrand>

              <button
                aria-expanded={this.state.navbarCollapse}
                className={classnames('navbar-toggler navbar-toggler', {
                  toggled: this.state.navbarCollapse,
                })}
                onClick={this.toggleNavbar}
              >
                <span className='navbar-toggler-bar bar1' />
                <span className='navbar-toggler-bar bar2' />
                <span className='navbar-toggler-bar bar3' />
              </button>
            </div>

            <Collapse className='justify-content-end' navbar>
              <Nav navbar>
                {/*ESTO DECIDE  QUE TIPO DE NAVBAR MOSTRAR*/}
                {this.validateAuth(this.props.authenticated)}
                {/*ESTO DECIDE  QUE TIPO DE NAVBAR MOSTRAR FIN*/}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated, user: state.user.currentUser };
};

export default connect(mapStateToProps, { signOut, fetchUser })(IndexNavbar);
