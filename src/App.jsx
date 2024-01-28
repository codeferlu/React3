import React, { useState, useEffect } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./Listado";
import Formulario from "./Formulario";
import Buscador from "./Buscador";
import Alert from "./Alert";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [nextID, setNextID] = useState(4); // Starting ID from 4
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });

  // Function to add a new collaborator
  const agregarColaborador = (nuevoColaborador) => {
    // Generate a unique ID for the new collaborator
    const uniqueID = nextID;

    // Add the new collaborator with the unique ID
    setColaboradores([...colaboradores, { id: uniqueID, ...nuevoColaborador }]);

    // Increment the nextID for the next collaborator
    setNextID(nextID + 1);
  };

  // Function to search for collaborators
  const buscarColaboradores = (textoBusqueda) => {
    // Logic to filter collaborators based on the search
    const colaboradoresFiltrados = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((valor) =>
        valor.toString().toLowerCase().includes(textoBusqueda.toLowerCase())
      )
    );
    setColaboradores(colaboradoresFiltrados);
  };

  // Function to delete a collaborator
  const eliminarColaborador = (id) => {
    // Logic to remove the collaborator with the specified ID
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(colaboradoresActualizados);
  };

  // Fetch initial collaborators
  useEffect(() => {
    setColaboradores(BaseColaboradores);
  }, []);

  return (
    <>
    <div className="container">
      <div className="caja1">
      <h1>Lista de Colaboradores</h1>
      <Buscador buscarColaboradores={buscarColaboradores} />
      <br />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
      </div>
      <div className="caja2">
      <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={setAlerta} />
      <br />
      <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
      </div>
    </div>
    </>
  );
}

export default App;
