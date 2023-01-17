import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  // função do requisito 8
  adicionarCarrinho = (produto) => {
    console.log(produto);
    const { price, title, thumbnail, id } = produto;
    const carrinho = JSON.parse(localStorage.getItem('cart') || '[]');
    let produtosFiltrados = [];
    const itens = carrinho.some((item) => produto.id === item.id);
    if (!itens) {
      produtosFiltrados = [...carrinho, { quantidade: 1,
        price,
        title,
        thumbnail,
        id }];
    } else {
      produtosFiltrados = carrinho.map((elemento) => {
        if (elemento.id === produto.id) {
          return {
            ...elemento, quantidade: elemento.quantidade + 1,
          };
        }
        return elemento;
      });
    }
    localStorage.setItem('cart', JSON.stringify(produtosFiltrados));
  };

  toTakeId = (price, title, thumbnail, id) => {
    const infos = {
      price,
      title,
      thumbnail,
      id,
    };
    localStorage.setItem('detailsId', JSON.stringify(infos));
  };

  render() {
    const { listaProdutos /* ativandoBotao */ } = this.props;
    return (
      <section>
        <ul>
          { listaProdutos.length > 0 ? listaProdutos.map((produto) => (
            <div key={ produto.id }>
              <Link
                to="/details"
                data-testid="product-detail-link"
                onClick={ () => this.toTakeId(
                  produto.price,
                  produto.title,
                  produto.thumbnail,
                  produto.id,
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
                  <div />
                </div>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.adicionarCarrinho(produto) }
              >
                Adicionar ao carrinho
              </button>
            </div>
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
