import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const receberUsuario = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
         setUsuario(dados);
    }
    receberUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {usuario.map(informacao=>(
          <li key={informacao.resultados}>
            <h2>{}</h2>
          </li>
        ))}
        
            //complete o código
        
      </ul>
    </>
  );
}
