import React, { useState, useEffect } from 'react';

import axios from "axios";

import Avatar from "../../assets/img-2.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { 
  Container, 
  H1, 
  Image, 
  ContainerItens, 
  Button, 
  User,
} from './styles';

function Users() {
  const [users, setUsers] = useState([]);  //Esse é um estado no React. Um estado no react é imutavel ele não muda.


  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      
      setUsers(newUsers);

    }
    fetchUsers();

  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-avatar" src={Avatar} />
    <ContainerItens>
        <H1>Usuários</H1>
        
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
        
        <Button>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container> //Essa é uma sintaxe chamada JSX. É você misturar HTML com JS. No react da pra retornar elementos HTML.
  );
}

export default Users;





//REACT HOOK  => userEffect (Efeito Colateral).
// A minha aplicação inicia (A página carregou o useEffect é chamado!)
// Quando um estado que está no array de dependencia do useEffect é alterado..
// useEffect é um REACT HOOK que causa um efeito colateral que é chamado nas 2 ocasiões acima. O useEffect nã aceita o async, então dentro de useffect cria-se uma função, e essa função é chamada automaticamente















































/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
