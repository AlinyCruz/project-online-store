import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class InputButton extends Component {
  render() {
    const { handleChange, ativandoBotao } = this.props;
    return (
      <>
        <input
          onChange={ handleChange }
          type="search"
          data-testid="query-input"
          name="busca"
          id="busca"
        />
        <button
          onClick={ ativandoBotao }
          data-testid="query-button"
          type="button"
        >
          Buscar
        </button>
      </>
    );
  }
}

InputButton.propTypes = {
  ativandoBotao: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
