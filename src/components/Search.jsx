import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Search extends Component {
  state = {
    categorias: [],
    produtos: '',
    listaProdutos: [],
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
    const todosProdutos = await getProductsFromCategoryAndQuery(null, produtos);
    console.log(todosProdutos);
    if (todosProdutos.length === 0) {
      this.setState({
        listaProdutos: false,
      });
    } else {
      this.setState({
        listaProdutos: todosProdutos,
      });
    }
  };

  render() {
    const { categorias, listaProdutos } = this.state;
    // console.log(listaProdutos);
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
          <ul>
            { listaProdutos.map((produto) => (
              <div
                key={ produto.id }
                data-testid="product"
              >
                <h3>{ produto.title }</h3>
                <img src={ produto.thumbnail } alt={ produto.title } />
                <p>
                  {' '}
                  { produto.price }
                  {' '}
                </p>
              </div>
            )) }
          </ul>
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
