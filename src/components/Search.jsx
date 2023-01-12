import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

export default class Search extends Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    this.buscandoCategorias();
  }

  buscandoCategorias = async () => {
    const tipoCategorias = await getCategories();
    console.log(tipoCategorias);
    this.setState({
      categorias: tipoCategorias,
    });
  };

  render() {
    const { categorias } = this.state;
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
        <ul>
          { categorias.map((categoria) => (
            <li key={ categoria.id }>
              <button
                data-testid="category"
                type="button"
              >
                { categoria.name }
              </button>
            </li>))}
        </ul>
      </>
    );
  }
}
