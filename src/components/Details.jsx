import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getProductById } from '../services/api';

export default class Details extends Component {
  state = {
    productId: {},
  };

  async componentDidMount() {
    const infos = JSON.parse(localStorage.getItem('detailsId'));
    this.setState({
      productId: infos,
    });
  }

  addCarrinho = (productId) => {
    // const { productId } = this.state;
    const { price, title, thumbnail, id } = productId;
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

  render() {
    const { productId } = this.state;
    return (
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <div data-testid="product">
          <p data-testid="product-detail-name">{productId.title}</p>
          <img
            src={ productId.thumbnail }
            alt={ productId.title }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">{productId.price}</p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => this.addCarrinho(productId) }
          >
            Adiciona ao carrinho
          </button>
        </div>
      </div>
    );
  }
}
