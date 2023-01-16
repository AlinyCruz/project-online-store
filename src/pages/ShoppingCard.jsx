import React, { Component } from 'react';

export default class ShoppingCard extends Component {
  render() {
    return (
      // Página do carrinho de compras criada no requisito 3, onde exibe a mensagem carrinho vazio. Em Home foi criado um link que direciona para essa página
      <div>
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
      </div>
    );
  }
}
