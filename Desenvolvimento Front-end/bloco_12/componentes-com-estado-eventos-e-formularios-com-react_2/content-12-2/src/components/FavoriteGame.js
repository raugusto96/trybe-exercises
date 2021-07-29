import React, { Component } from 'react';

class FavoriteGame extends Component {
  render() {
    const { value, handleChange } = this.props;
    
    return (
      <label>
        Diga seu jogo preferido!
        <textarea
          name="favoriteGame"
          value={ value }
          onChange={ handleChange } />
      </label>
    );
  };
}

export default FavoriteGame;