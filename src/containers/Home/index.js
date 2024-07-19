import React, { useState, useRef } from 'react';

import axios from "axios";

import People from "../../assets/img-1.svg";
import Arrow from "../../assets/arrow.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button, 

} from './styles';

function App() {
  const [users, setUsers] = useState([]);  //Esse é um estado no React. Um estado no react é imutavel ele não muda.
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    //Para se conectar com o back-end tem que ser nesse local.

    setUsers([...users, newUser]);

  }

  return (
    <Container>
      <Image alt="logo-people" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastar<img alt="seta" src={Arrow} /></Button>

      </ContainerItens>
    </Container> //Essa é uma sintaxe chamada JSX. É você misturar HTML com JS. No react da pra retornar elementos HTML.
  );
}

export default App;




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
