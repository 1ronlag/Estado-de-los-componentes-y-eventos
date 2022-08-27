// se crea el componente Header (titulo)//
import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="title">{props.titulo} </h1>
    </div>
  );
};
export default Header;