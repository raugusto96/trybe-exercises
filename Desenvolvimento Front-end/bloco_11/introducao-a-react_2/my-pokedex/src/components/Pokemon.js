import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <section className='pokemon'>
        <div className="image">
          <div>
            <h2>{ name }</h2>
            <p>{ type }</p>
            <p>{`Average weight: ${ averageWeight.value }${ averageWeight.measurementUnit }`}</p>
          </div>
          <div>
            <img src={ image } alt={ name } />
          </div>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
}

export default Pokemon;