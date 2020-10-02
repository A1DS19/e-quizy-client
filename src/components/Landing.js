import React, { Component, Fragment } from 'react';

export class Landing extends Component {
  render() {
    return (
      <Fragment>
        <div className='wrapper'>
          <div
            className='page-header section-dark'
            style={{
              backgroundImage: `url(${require('../assets/img/sections/home-page.jpg')})`,
            }}
          >
            <div className='filter'></div>

            <div className='content-center'>
              <div className='container'>
                <div className='title-brand'>
                  <h1 className='presentation-title'>E-quizy</h1>
                </div>
                <h2 className='presentation-subtitle text-center'>
                  Bienvenido a E-quizy!
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='section section-dark section-summary'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='info'>
                  <div className='icon'>
                    <i style={{ color: '#f5593d' }}>
                      <i className='fa fa-user-plus' aria-hidden='true'></i>
                    </i>
                  </div>

                  <div className='description'>
                    <h4 className='info-title'>Regístrese</h4>
                    <p>
                      Crea su períl con un simple paso y empieza a evaluar de una manera
                      novedosa y segura!
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='fa fa-file-text' aria-hidden='true'></i>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Crea y ayuda</h4>
                    <p>
                      Crea questionarios, examenes, pruebas cortas, etc. Publica las
                      evaluaciones y ayuda a otros profesores con inovedosas preguntas!
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Evalua</h4>
                    <p>
                      Crea evaluaciones con preguntas propias o busca ayuda con nuestra
                      amplia lista de preguntas, edita si lo necesitas y evalúa!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='fa fa-paper-plane' aria-hidden='true'></i>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Envía resultados</h4>
                    <p>Envía los resultados instantanemante despúes de evaluar!</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='nc-icon nc-paper'></i>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Reportes</h4>
                    <p>
                      Analice datos de todos los resultados de sus estudiantes por clase,
                      tiempo u otra condición!
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='info'>
                  <div className='icon icon-danger'>
                    <i className='fa fa-smile-o' aria-hidden='true'></i>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Disfrúta</h4>
                    <p>
                      Disfrúta creando preguntas y evaluaciones que le ayudarán a tener
                      más tiempo, para otras actividades y ayudando a la comunidad de
                      profesores de la plataforma!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Landing;
