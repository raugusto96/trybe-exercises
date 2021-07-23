import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)
    
    
    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0,
    }
  }

  handleButtonOne() {
    this.setState((beforeState) => ({
      buttonOne: beforeState.buttonOne + 1,
    }));
    if (this.state.buttonOne % 2 === 0) console.log('green');
    console.log('Clicou no botão 1!');
  }
  
  handleButtonTwo() {
    this.setState((beforeState) => ({
      buttonTwo: beforeState.buttonTwo + 1,
    }));
  }
  
  handleButtonThree() {
    this.setState(( { buttonThree } ) => ({
      buttonThree: buttonThree + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1 - Fui clicado: { this.state.buttonOne }</button>
        <button onClick={ this.handleButtonTwo }>Botão 2 - Fui clicado: { this.state.buttonTwo }</button>
        <button onClick={ this.handleButtonThree }>Botão 3 - Fui clicado: { this.state.buttonThree }</button>
      </div>
    );
  }
}

export default App;
