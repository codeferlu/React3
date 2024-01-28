import React, { useState } from "react";

const Buscador = ({ buscarColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    buscarColaboradores(e.target.value);
  };

  return (
    <div className="form-group">
      <label>Buscar Colaborador</label>
      <br/>
      <input
        type="text"
        className="form-control"
        value={busqueda}
        onChange={handleBusqueda}
        placeholder="Ingrese datos de colaborador"
      />
    </div>
  );
};

export default Buscador;
