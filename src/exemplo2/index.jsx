import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta= await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = await resposta.json();
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {usuario.map(usuarios=>(
          <li key={usuarios.useerId}>
            <h2>{usuarios.id}</h2>
            <p>{usuarios.title}</p>
            <p>{usuarios.completed}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
