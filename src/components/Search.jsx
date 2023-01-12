import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Search extends Component {
  state = {
    categorias: [],
    produtos: '',
    tiposProdutos: [],
    invalido: false,
  };

  componentDidMount() {
    this.buscandoCategorias();
  }

  buscandoCategorias = async () => {
    const tipoCategorias = await getCategories();
    this.setState({
      categorias: tipoCategorias,
    });
  };

  ativandobotao = async () => {
    const { produtos } = this.state;
    const tiposProdutos = await getProductsFromCategoryAndQuery(null, produtos);
    if (tiposProdutos.results.length === 0) {
      this.setState({
        invalido: true,
      });
    } else {
      this.setState({
        tiposProdutos,
        invalido: false,
      });
    }
  };

  render() {
    const { categorias, tiposProdutos } = this.state;
    // console.log(tiposProdutos);
    return (
      <>
        <input
          onChange={ ({ target }) => this.setState({ produtos: target.value }) }
          type="search"
          data-testid="query-input"
          name="busca"
          id="busca"
        />
        <button
          onClick={ this.ativandobotao }
          data-testid="query-button"
          type="button"
        >
          Buscar
        </button>
        <section>
          { tiposProdutos.map((produto) => (
          <p key={ produto.results }>

          </p> 
          )) }
        </section>
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
