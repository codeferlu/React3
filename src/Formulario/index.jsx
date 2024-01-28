import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nombre && correo && edad && cargo && telefono) {
      // Agregar el nuevo colaborador
      agregarColaborador({ nombre, correo, edad, cargo, telefono });
      // Limpiar los campos del formulario
      setNombre("");
      setCorreo("");
      setEdad("");
      setCargo("");
      setTelefono("");
      // Mostrar alerta de éxito
      mostrarAlerta({ mensaje: "Colaborador agregado exitosamente", tipo: "success" });
    } else {
      // Mostrar alerta de error
      mostrarAlerta({ mensaje: "Por favor, complete todos los campos", tipo: "danger" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <Form.Control
          size="sm"
          type="text"
          id="nombre" // Add unique id attribute
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese su nombre"
        />
        <br />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo:</label>
        <Form.Control
          size="sm"
          type="email"
          id="correo" // Add unique id attribute
          className="form-control"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Ingrese su correo"
        />
        <br />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <Form.Control
          size="sm"
          type="number"
          id="edad" // Add unique id attribute
          className="form-control"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          placeholder="Ingrese su edad"
        />
        <br />
      </div>
      <div className="form-group">
        <label htmlFor="cargo">Cargo:</label>
        <Form.Control
          size="sm"
          type="text"
          id="cargo" // Add unique id attribute
          className="form-control"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Ingrese su cargo"
        />
        <br />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <Form.Control
          size="sm"
          type="text"
          id="telefono" // Add unique id attribute
          className="form-control"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingrese su numero de teléfono"
        />
        <br />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar Colaborador
      </button>
    </form>
  );
};

export default Formulario;