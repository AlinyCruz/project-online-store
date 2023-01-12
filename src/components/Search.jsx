import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  render() {
    return (
      <>
        <input type="search" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link
          data-testid="shopping-cart-empty-message"
          to="/shoppingcard"
        >
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
      </>
    );
  }
}
