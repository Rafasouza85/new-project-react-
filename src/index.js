import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes'

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

//Fragment --> <> </> serve para cumprir a regra do react e encapsular os elementos dentro do que  react pede. 
//No react não pode renderizar dois elementos, sempe tem que ter um pai de todo mundo um elemento em volta de todo mundo.