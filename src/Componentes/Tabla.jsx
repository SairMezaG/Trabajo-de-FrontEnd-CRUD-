/* import React from 'react'
import "../Estilos/Tabla.css"
import BotonEliminarUsuario from './BotonEliminarUsuario';


const Tabla = ({ usuarios, onEditar, onEliminar }) => {

  /* const confirmarEliminacion = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
      onEliminar(id);
    }
  }; */


  /*const confirmarEdicion = (usuario) => {
    if (window.confirm("¿Estás seguro de que quieres hacer cambios para este usuario?")) {
      onEditar(usuario);
    }
  };



  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.descripcion}</td>
            <td>
              <button onClick={() => confirmarEdicion(usuario)}>Editar</button>
              
              <BotonEliminarUsuario/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
 */


/* import React from 'react';
import BotonEliminarUsuario from './BotonEliminarUsuario';
import BotonEditarUsuario from './BotonEditarUsuario';
import "../Estilos/Tabla.css"

const Tabla = ({ usuarios, onEditar, onEliminar }) => {

  
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.descripcion}</td>
            <td>
              
              <BotonEditarUsuario onEditar ={onEditar}/>
              <BotonEliminarUsuario onEliminar={onEliminar} id={usuario.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla; */



/* import React from 'react';
import BotonEliminarUsuario from './BotonEliminarUsuario';
import BotonEditarUsuario from './BotonEditarUsuario';
import "../Estilos/Tabla.css"

const Tabla = ({ usuarios, onEditar, onEliminar }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.descripcion}</td>
            <td>
              <BotonEditarUsuario onEditar={onEditar} usuario={usuario} />
              <BotonEliminarUsuario onEliminar={onEliminar} id={usuario.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla; */



import React from 'react';
import BotonEliminarUsuario from './BotonEliminarUsuario';
import BotonEditarUsuario from './BotonEditarUsuario';
import ContadorRegistros from './ContadorDeRegistros';
import "../Estilos/Tabla.css";

const Tabla = ({ usuarios, onEditar, onEliminar }) => {
  const cantidadRegistros = usuarios.length;

  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.descripcion}</td>
              <td>
                <BotonEditarUsuario onEditar={onEditar} usuario={usuario} />
                <BotonEliminarUsuario onEliminar={onEliminar} id={usuario.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContadorRegistros cantidadRegistros={cantidadRegistros} />
    </div>
  );
};

export default Tabla;


