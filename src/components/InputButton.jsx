import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class InputButton extends Component {
  render() {
    // Pros usada para ativar o botao de buscar com o ativandoBotao (função de Home) e a handleChange que busca os valores de produtos.
    const { handleChange, ativandoBotao } = this.props;
    return (
      <>
        <input // Input criado para o requisito 2, ele é o campo de buscar
          onChange={ handleChange }
          type="search"
          data-testid="query-input"
          name="busca"
          id="busca"
        />
        <button // Botao do requisito 2, onde é feito a busca dos produtos
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
