//se crea el componente button y su reseteo correpondiente una vez que el usuario realice el submit//

import React from "react";

const Button = (props) => {
    return (
      <div className="container-button">
        <button
          onClick={() => {
            props.buttonReset()
          }}
        >
          Ingresar al sistema
        </button>
      </div>
    )
  }
  export default Button