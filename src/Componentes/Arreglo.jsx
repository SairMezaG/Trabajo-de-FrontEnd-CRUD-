import React, { useState } from 'react';
import Tabla from './Tabla';
import Filtro from './Filtro';
import Select from './Select';
import Registros from './Registros';

const Arreglo = ({ usuarios }) => {
  const [filtro, setFiltro] = useState("");
  const [cantidadRegistros, setCantidadRegistros] = useState(20);
  const [datosFiltrados, setDatosFiltrados] = useState(usuarios);

  const filtroDatos = datosFiltrados.slice(0, cantidadRegistros);

  const filtrarPorLetra = (letra) => {
    const nuevosDatosFiltrados = datos.filter(persona => 
      persona.nombre.toLowerCase().startsWith(letra.toLowerCase())
    );
    setFiltro(letra);
    setDatosFiltrados(nuevosDatosFiltrados);
  };



  return (
    <div>
      <Filtro filtro={filtro} onFiltroChange={filtrarPorLetra} />
      <Select onChange={(e) => setCantidadRegistros(parseInt(e.target.value))} />
      <br />
      <br />
      <Tabla usuarios={filtroDatos} eliminarRegistro={eliminarRegistro} />
      
      <Registros cantidadRegistros={filtroDatos.length} totalRegistros={usuarios.length} />
    </div>
  );
}

export default Arreglo;

 



