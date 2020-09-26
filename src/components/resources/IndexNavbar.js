import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { signOut } from '../../actions';
import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export class IndexNavbar extends Component {
  state = {
    collapsed: true,
    navbarColor: 'navbar-transparent',
    dropDownOpen: false,
  };

  toggleDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
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
        <Dropdown
          group
          isOpen={this.state.dropDownOpen}
          size='sm'
          toggle={this.toggleDropDown}
        >
          <DropdownToggle caret>Pruebas</DropdownToggle>
          <DropdownMenu>
            <DropdownItem href='#'>Crear</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href='#'>Pruebas</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href='#'>Respuestas</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink data-placement='bottom'>
            <i className='fa fa-id-card-o' />
            <Link to='/'>
              <p className='d-lg-none' style={{ color: 'gray' }}>
                Mi Perfil
              </p>
            </Link>
          </NavLink>
        </NavItem>
        <NavItem onClick={this.signOut}>
          <NavLink data-placement='bottom' href='/'>
            <i className='fa fa-sign-out' />
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

            <Collapse className='justify-content-end' navbar isOpen={this.toggleNavbar}>
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
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps, { signOut })(IndexNavbar);
