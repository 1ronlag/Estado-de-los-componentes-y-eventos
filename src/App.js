import React, { useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Header from "./Components/Header";


//declaramos  las constantes y funciones//
function App() {
  const buttonReset = () => {
    setName('');
    setPassword('');

    if (name === '') {
      alert('Favor ingresa tu usuario')
    }

  }
  const [name, setName] = useState("");
  const [pass, setPassword] = useState("");

  // pintamos el html y validamos que la contraseña sea 252525//
  return (
    <div>
      <Header titulo=" Estado de los componentes y eventos" />

      <div className="container">
        <h3 className="subtitle">Ingresa tus datos de acceso</h3>

        <Input
          name={name}
          setName={setName}
          pass={pass}
          setPassword={setPassword}
        />
      <br/>
        {pass === "252525" ? <Button buttonReset={buttonReset} />: ''}
      </div>
    </div>
  );
}

export default App;
