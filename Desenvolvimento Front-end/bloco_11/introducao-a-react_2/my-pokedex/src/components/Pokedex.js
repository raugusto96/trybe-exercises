import { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render () {
    return (
      <div className="pokedex">
        { this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
      </div>
    );
  }
}

