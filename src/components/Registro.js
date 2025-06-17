import React, { useState } from 'react';

function Registro(props) {
  const [Formulario, setFormulario] = useState({
    nombre: '',
    email: ''

  });
  const manejarCambio = (e) => {
    const { name, value} = e.target;
    setFormulario({...Formulario, [name]: value});
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos del Formulario: ', Formulario);
  }
  return (
    <form onSubmit={manejarEnvio}>
     <label>Nombre:</label>
     <input
       type="text"
       name="nombre"
       value={Formulario.nombre}
       onChange={manejarCambio}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={Formulario.email}
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
    </form>  
  );
}

export default Registro;