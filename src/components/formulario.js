import React from "react";

export default function Formulario(props) {
  return (
    <form>
        <div>
          <input type="text" value={props.username}/>
      </div>
        <div>
      <input type="password" value={props.password || ""} />
      </div>
      <div><button>Hola</button></div>
    </form>
  );
}