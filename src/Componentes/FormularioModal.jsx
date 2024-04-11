import React, { useState } from 'react';

const FormularioModal = ({ onGuardar, onClose }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ id, nombre, descripcion });
    setId('');
    setNombre('');
    setDescripcion('');
  };

  const handleCancelar = () => {
    onClose();
    setId('');
    setNombre('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Registrar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleCancelar}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormularioModal;





