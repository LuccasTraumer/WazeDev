// Externas
import React, { useState , useEffect } from 'react';

// Internas
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


//
function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  },[])

  async function handlerAddDev(data){

    const response = await api.post('/devs',data)
    setDevs([...devs,response.data]);
  }


  return (
    <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handlerAddDev}/>
       </aside>
       <main>
          <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
            
          </ul>
       </main>
    </div>
  );
}

export default App;

/* Tres conceitos React: Componente, Estado e Propriedade
-Conceito Componente: Componente é uma função que retorna algum conteudo html,js, css. 
  No qual não interfere no restante da aplicação .Ex: App é um componente
  Utilizado quando conseguimos reutilizar o codigo ou isolar pedaço do codigo(html, css ou js)
  Primeira letra do Componente semppre MAIUSCULA, Um componente por Arquivo

-Conceito Estado: Informações mantidas pelos componentes (Lembrar: Imutabilidade).
  
-Conceito de Propriedade: Informações que o Componente PAI passa para o Componente FILHO.

No Return dos Componentes ele tem de ter algo em volta de todo codigo JSX por isso utilizamos <> </>
*/