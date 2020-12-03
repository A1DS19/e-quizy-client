import React from 'react';

function SmallLoader() {
  return (
    <div
      class='spinner-border'
      role='status'
      style={{ margin: 'auto', display: 'block' }}
    >
      <span class='sr-only'>Cargando...</span>
    </div>
  );
}

export default SmallLoader;
