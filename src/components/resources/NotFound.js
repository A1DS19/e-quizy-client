import React from 'react';

function NotFound() {
  return (
    <div>
      <div className='page-header'>
        <div
          className='page-header section-dark'
          style={{
            backgroundImage: `url(${require('../../assets/img/sections/pedro-lastra.jpg')})`,
          }}
        >
          <div className='filter'></div>
          <div className='content-center'>
            <div className='motto'>
              <h2 className='title-uppercase text-center'>ERROR 404 PAGINA NO EXISTE</h2>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
