import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  // função do requisito 8
  adicionarCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...carrinho, produto]));
  };

  toTakeId = (price, title, thumbnail) => {
    const infos = {
      price,
      title,
      thumbnail,
    };
    localStorage.setItem('detailsId', JSON.stringify(infos));
  };

  render() {
    const { listaProdutos /* ativandoBotao */ } = this.props;
    return (
      <section>
        <ul>
          { listaProdutos.length > 0 ? listaProdutos.map((produto) => (
            <Link
              key={ produto.id }
              to="/details"
              data-testid="product-detail-link"
              onClick={ () => this.toTakeId(
                produto.price,
                produto.title,
                produto.thumbnail,
              ) }
            >
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
                    onClick={ () => this.adicionarCarrinho(produto) }
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </Link>
          )) : <p>Nenhum produto foi encontrado</p>}
        </ul>
      </section>
    );
  }
}

Cart.propTypes = {
  listaProdutos: PropTypes.string.isRequired,
  /* ativandoBotao: PropTypes.func.isRequired, */
};
