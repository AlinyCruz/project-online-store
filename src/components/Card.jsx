import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { listaProdutos } = this.props;
    return (
      <section>
        <ul>
          { listaProdutos.length > 0 ? listaProdutos.map((produto) => (
            <div
              key={ produto.id }
              data-testid="product"
            >
              <h3>{ produto.title }</h3>
              <img src={ produto.thumbnail } alt={ produto.title } />
              <p>
                {' '}
                { produto.price }
                {' '}
              </p>
              <div>
                <button type="button">Adicionar ao carrinho</button>
                <button type="button">Remover do carrinho</button>
              </div>
            </div>
          )) : <p>Nenhum produto foi encontrado</p>}
        </ul>
      </section>
    );
  }
}

Card.propTypes = {
  listaProdutos: PropTypes.string.isRequired,
};
