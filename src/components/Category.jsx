import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Category extends Component {
  render() {
    const { categorias } = this.props;
    return (
      <ul>
        { categorias.map((categoria) => (
          <li key={ categoria.id }>
            <button
              data-testid="category"
              type="button"
            >
              { categoria.name }
            </button>
          </li>))}
      </ul>
    );
  }
}

// Verificar esta props
Category.propTypes = {
  categorias: PropTypes.shape([]).isRequired,
// map: PropTypes.func,
};
