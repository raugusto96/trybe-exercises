import React, { Component } from 'react';
import FavoriteGame from './components/FavoriteGame';
import Input from './components/Input';
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
          <FavoriteGame handleChange={ this.handleChange } value={ this.state.favoriteGame } />
          <Input handleChange={ this.handleChange } value={ this.state.age } type="checkbox" name="played" />
          <Input handleChange={ this.handleChange } value={ this.state.age } type="number" name="age" />
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