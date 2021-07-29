import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { value, handleChange, name, type } = this.props;
    
    return (
      <label>
        { type === 'checkbox' ? 'Já jogou:' : 'Vezes que zerou: ' }
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ handleChange } />
      </label>
    );
  };
}

export default Input;