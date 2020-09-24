import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function DemoFooter() {
  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <Fragment>
      <footer className='footer footer-black'>
        <div className='container'>
          <div className='row'>
            <nav className='footer-nav'>
              <ul>
                <li>
                  <Link to='/'>E-QUIZY</Link>
                </li>
              </ul>
            </nav>
            <div className='credits ml-auto'>
              <span className='copyright'>
                © {getDate()}, made with <i className='fa fa-heart heart'></i> by Alex
                Quesada
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default DemoFooter;
