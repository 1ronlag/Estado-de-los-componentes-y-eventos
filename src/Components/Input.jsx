//se crean los componentes inputs//
import React from "react";

const input = (props) => {
  return (
    <div>
      <input
        type="text"
        name="nombre"
        className="form-control"
        onChange={(event) => props.setName(event.target.value)}
        autoFocus
        value={props.nombre}
        placeholder="Usuario"
      />

<br />
        <input 
            type="password"
            name="password"
            className="form-control2"
            onChange={(event) => props.setPassword(event.target.value)}
            value={props.password}
            placeholder="Contraseña"
            maxLength={6}
        />

    </div>
  );
};

export default input;
