import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions';
import requireAuth from '../../middlewares/requireAuth';

export class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderUserAvatar(img) {
    if (img) {
      return (
        <Fragment>
          <div className='fileinput-new img-no-padding'>
            <img src={this.props.user.image} alt='...' />
          </div>
        </Fragment>
      );
    }
    return (
      <div className='fileinput-new img-no-padding'>
        <img src={`${require('../../assets/img/faces/no-avatar.png')}`} alt='no-avatar' />
      </div>
    );
  }

  render() {
    if (this.props.user) {
      return (
        <Fragment>
          <div className='wrapper'>
            <div
              className='page-header page-header-small'
              style={{
                backgroundImage: `url(${require('../../assets/img/sections/rodrigo-ardilha.jpg')})`,
              }}
            >
              <div className='filter'></div>
            </div>
            <div className='profile-content section'>
              <div className='container'>
                <div className='row'>
                  <div className='profile-picture'>
                    <div
                      className='fileinput fileinput-new text-center'
                      data-provides='fileinput'
                    >
                      {this.renderUserAvatar(this.props.user.image)}

                      <div className='name'>
                        <h4 className='title text-center'>
                          {this.props.user.firstName} {this.props.user.lastName}
                          <br />
                          <small>{this.props.user.roleName}</small>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 ml-auto mr-auto text-center'>
                    <p>
                      En este lugar podra ingresar una descripcion de su perfil, cuales
                      son sus metas y logros al igual que calquier dato adicional que le
                      permita describir mas su persona!
                    </p>
                    <br />
                    <Link
                      to='/profile/user_profile_settings'
                      className='btn btn-outline-primary btn-round'
                    >
                      <i className='fa fa-cog'></i> Ajustes
                    </Link>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
    return null;
  }
}
const mapStateToProps = (state) => {
  return { user: state.user.currentUser };
};
export default connect(mapStateToProps, { fetchUser })(requireAuth(UserProfile));
