import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    carrinho: [],
  };

  componentDidMount() {
    this.carrinhoAdicionar();
  }

  carrinhoAdicionar = () => {
    const carrinho = JSON.parse(localStorage.getItem('cart') || '[]');
    this.setState({
      carrinho,
    });
  };

  atualizaQuantia = (productId, bolleano) => {
    // const { productId } = this.state;
    let carrinho = JSON.parse(localStorage.getItem('cart') || '[]');
    const itens = carrinho.find((item) => productId === item.id);
    if (bolleano === 'remover') {
      carrinho = carrinho.filter((item) => item.id !== productId);
    }
    if (bolleano) {
      itens.quantidade += 1;
    } else if (itens.quantidade > 1) {
      itens.quantidade -= 1;
    }
    this.setState({
      carrinho,
    });
    localStorage.setItem('cart', JSON.stringify(carrinho));
  };

  render() {
    const { carrinho } = this.state;
    console.log(carrinho);
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
              <p data-testid="shopping-cart-product-quantity">{ carrinhos.quantidade }</p>
              <button
                data-testid="product-increase-quantity"
                onClick={ () => this.atualizaQuantia(carrinhos.id, true) }
                type="button"
              >
                +
              </button>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => this.atualizaQuantia(carrinhos.id, false) }
                type="button"
              >
                -
              </button>
              <button
                data-testid="remove-product"
                onClick={ () => this.atualizaQuantia(carrinhos.id, 'remover') }
                type="button"
              >
                Remover
              </button>
            </div>))) }
      </div>
    );
  }
}
