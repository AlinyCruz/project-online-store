import React, { Component } from 'react';

export default class ShoppingCard extends Component {
  state = {
    carrinho: [],
  };

  componentDidMount() {
    this.carrinhoAdicionar();
  }

  carrinhoAdicionar = () => {
    const carrinho = JSON.parse(localStorage.getItem('card') || '[]');
    this.setState({
      carrinho,
    });
  };

  render() {
    const { carrinho } = this.state;
    return (
      // Página do carrinho de compras criada no requisito 3, onde exibe a mensagem carrinho vazio. Em Home foi criado um link que direciona para essa página
      <div>
        { carrinho.length === 0
          ? (
            <h3 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h3>
          )
          : (carrinho.map((carrinhos) => (
            <div key={ carrinhos.id }>
              <p data-testid="shopping-cart-product-name">
                { carrinhos.title }
              </p>
              <p>{ carrinhos.price }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>))) }
      </div>
    );
  }
}
