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

export class IndexNavbar extends Component {
  state = {
    collapsed: true,
    navbarColor: 'navbar-transparent',
    dropDownOpen: false,
  };

  toggleDropDown = () => {
    this.setState({ dropDownOpen: !this.state.dropDownOpen });
    console.log(this.state.dropDownOpen);
  };

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed });
    document.documentElement.classList.toggle('nav-open');
  };

  updateNavbarColor = () => {
    if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
      this.setState({ navbarColor: '' });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({ navbarColor: 'navbar-transparent' });
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
          <NavLink data-placement='bottom' href='/auth/register'>
            <i className='fa fa-user-plus' />
            <p className='d-lg-none '>Registro</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink data-placement='bottom' href='/auth/login'>
            <i className='fa fa-sign-in' />
            <p className='d-lg-none '>Login</p>
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
          <NavLink data-placement='bottom' href='/'>
            <i className='fa fa-id-card-o' />
            <p className='d-lg-none'>Mi Perfil</p>
          </NavLink>
        </NavItem>
      </Fragment>
    );
  }

  signOut() {
    this.props.signOut(() => {
      console.log(true);
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar className={classnames('fixed-top', this.state.navbarColor)} expand='lg'>
          <Container>
            <div className='navbar-translate'>
              <NavbarBrand
                data-placement='bottom'
                href='/'
                target='_blank'
                title='Coded by Creative Tim'
              >
                e-quizy
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
                {/*ESTO DICE SI QUE TIPO DE NAVBAR MOSTRAR*/}
                {this.renderNavNoAuth()}
                {/*ESTO DICE SI QUE TIPO DE NAVBAR MOSTRAR FIN*/}

                <NavItem onClick={this.signOut.bind(this)}>
                  <NavLink data-placement='bottom' href='/'>
                    <i className='fa fa-sign-out' />
                    <p className='d-lg-none'>Salir</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default connect(null, { signOut })(IndexNavbar);
