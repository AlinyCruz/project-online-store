import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import Category from '../components/Category';
import InputButton from '../components/InputButton';

export default class Home extends Component {
  state = {
    categorias: [],
    produtos: '',
    listaProdutos: false,
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

  ativandoBotao = async () => {
    const { produtos } = this.state;
    const todosProdutos = await getProductsFromCategoryAndQuery(null, produtos);
    console.log(todosProdutos);
    if (todosProdutos.length === 0) {
      this.setState({
        listaProdutos: false,
      });
    } else {
      this.setState({
        listaProdutos: todosProdutos.results,
      });
    }
  };

  handleChange = ({ target }) => {
    this.setState({ produtos: target.value });
  };

  render() {
    const { categorias, listaProdutos } = this.state;
    // console.log(listaProdutos);
    return (
      <>
        <InputButton
          handleChange={ this.handleChange }
          ativandoBotao={ this.ativandoBotao }
        />
        { listaProdutos
          ? <Card listaProdutos={ listaProdutos } />
          : (
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          )}
        <Link
          data-testid="shopping-cart-empty-message"
          to="/shoppingcard"
        >
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        <Category categorias={ categorias } />
      </>
    );
  }
}
