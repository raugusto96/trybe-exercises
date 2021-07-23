import React from 'react'; 
// import React, { Component } from 'react'; // pode ser desestruturando o component de React também

// criando um componente
// classe js com código react embutido
class HelloWorld extends React.Component { // Aqui fica (class HelloWorld extends Component)
  render() { // para o react renderizar na tela
    return <span>Hello, world!</span>
  }
}

export default HelloWorld; // exportando para eu usar em outros lugares