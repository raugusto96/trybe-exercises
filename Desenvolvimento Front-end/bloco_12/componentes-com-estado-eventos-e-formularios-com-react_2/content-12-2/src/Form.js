import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      favoriteGame: '',
    };
  }

  handleChange(event) {
    this.setState({
      favoriteGame: event.target.value,
    });
  }


  render() {
    return (
      <div>
      <h1>Meu formulário!</h1>
      <form className="form">
        <label>
          Diga seu jogo preferido!
            <textarea name="favoriteGame" value={ this.state.favoriteGame } onChange={ this.handleChange } />
        </label>
        <label>
          Já jogou?
        Sim: <input type="checkbox" name="jaJogou" />
        Não: <input type="checkbox" name="jaJogou" />
        </label>
        <label>
          Vezes que zerou:
        <input type="number" name="idade" />
        </label>
        <label>
          Escolha seu jogo preferido:
        <select name="favoriteOtherGame">
          <option value="select">Selecione seu jogo</option>
          <option value="lol">League of Legends</option>
          <option value="zelda">Legend of Zelda</option>
          <option value="pokemon">Pokemon</option>
        </select>
        </label>
      </form>
    </div>
    );
  }
}

export default Form;