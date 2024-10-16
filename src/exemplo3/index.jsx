import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const receberUsuario = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
         setUsuario(dados.results);
    }
    receberUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {usuario.length>0&& usuario.map(informacao=>(
          <li key={informacao.resultados}>
            <h2>{`${informacao.primeironome} ${informacao.segundonome}`}</h2>
            <p>Email:{informacao.email}</p>
            <p>País: {informacao.pais}</p>
            <p>Telefone: {informacao.telefone}</p>
            <img src={Image}/>
          </li>
        ))}
      
      </ul>
    </>
  );
}
