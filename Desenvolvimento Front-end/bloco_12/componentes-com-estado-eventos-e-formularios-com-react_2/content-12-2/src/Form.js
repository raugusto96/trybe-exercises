import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      favoriteGame: '',
      played: false,
      age: 0,
      favoriteOtherGame: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [ name ]: value,
    });
  }


  render() {
    return (
      <div>
      <h1>Meu formulário!</h1>
      <form className="form">
        <fieldset>
          <label>
            Diga seu jogo preferido!
              <textarea
                name="favoriteGame"
                value={ this.state.favoriteGame }
                onChange={ this.handleChange } />
          </label>
          <label>
            Já jogou?
          <input
            type="checkbox"
            name="played"
            value={ this.state.played }
            onChange={ this.handleChange } />
          </label>
          <label>
            Vezes que zerou:
          <input
            type="number"
            name="age"
            value={ this.state.age }
            onChange={ this.handleChange } />
          </label>
          <label>
            Escolha seu jogo preferido:
          <select
            name="favoriteOtherGame"
            value={ this.state.favoriteOtherGame }
            onChange={ this.handleChange } >
            <option value="select">Selecione seu jogo</option>
            <option value="lol">League of Legends</option>
            <option value="zelda">Legend of Zelda</option>
            <option value="pokemon">Pokemon</option>
          </select>
          </label>
          <label>
            Envie seu arquivo:
            <input
              type="file"
              name="file"
              ref={ this.fileInput }
              onChange={ this.handleChange } />
          </label>
        </fieldset>
      </form>
    </div>
    );
  }
}

export default Form;