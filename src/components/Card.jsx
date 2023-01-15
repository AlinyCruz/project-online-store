import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  // função do requisito 8
  adicionarCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem('card') || '[]');
    localStorage.setItem('card', JSON.stringify([...carrinho, produto]));
  };

  render() {
    const { listaProdutos /* ativandoBotao */ } = this.props;
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
                { produto.price }
              </p>
              <div>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => this.adicionarCarrinho(produto) } // parte do requisito 8
                >
                  Adicionar ao carrinho
                </button>
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
  /* ativandoBotao: PropTypes.func.isRequired, */
};
