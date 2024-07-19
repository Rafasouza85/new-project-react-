import React from 'react';
import ReactDOM from 'react-dom';
import Users from './containers/Users';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <>
    <Users />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

//Fragment --> <> </> serve para cumprir a regra do react e encapsular os elementos dentro do que  react pede. 
//No react não pode renderizar dois elementos, sempe tem que ter um pai de todo mundo um elemento em volta de todo mundo.