import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Category extends Component {
  render() {
    // Props criadas para o requisito 4 e 6. Onde categorias (é um estado) se refere ao requisito 4 que precisamos exibir elas em tela. E o ativandoBotao (função) se refere ao requisito 6 que precisamos que os produtos sejam linkdos nos botoes de categorias
    const { categorias, ativandoBotao } = this.props;
    return (
      // Requisito 4, foi feito um map para puxar as categorias da api e usado ul e li para lista-las em formato de lista
      // Req
      <ul>
        { categorias.map((categoria) => (
          <li key={ categoria.id }>
            <button
              data-testid="category"
              type="button"
              onClick={ () => ativandoBotao(categoria.id) }
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
  ativandoBotao: PropTypes.func.isRequired,
};
