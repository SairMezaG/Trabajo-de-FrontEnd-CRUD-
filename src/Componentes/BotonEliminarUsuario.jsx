/* import React from 'react'

function BotonEliminarUsuario() {

    const confirmarEliminacion = (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
          onEliminar(id);
        }
      };



  return (
    <div>
        <button onClick={() => confirmarEliminacion(usuario.id)}>Eliminar</button>
    </div>
    
  )
}

export default BotonEliminarUsuario */


import React from 'react';

function BotonEliminarUsuario({ onEliminar, id }) {

    const confirmarEliminacion = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
          onEliminar(id);
        }
    };

    return (
        <div>
            <button onClick={confirmarEliminacion}>Eliminar</button>
        </div>
    );
}

export default BotonEliminarUsuario;
