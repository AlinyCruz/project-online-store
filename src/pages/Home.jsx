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

  // Requisito 4, onde foi feita a busca das categorias para lista-las em tela
  buscandoCategorias = async () => {
    const tipoCategorias = await getCategories();
    this.setState({
      categorias: tipoCategorias,
    });
  };

  // Requisito 5, onde foi feito uma função para ativar o botão de buscar e ao clicar ele retorne os produtos buscado.
  ativandoBotao = async (id) => {
    const { produtos } = this.state;
    const todosProdutos = await getProductsFromCategoryAndQuery(id, produtos);
    console.log(todosProdutos);
    if (todosProdutos.length === 0) {
      this.setState({
        listaProdutos: false,
      });
    } else {
      this.setState({
        listaProdutos: todosProdutos.results, // foi usado .results para retornar somente os resultados e não todas as informações e assim ficar mais intuitivo
      });
    }
  };

  // Função em busca de valores dos produtos ?
  handleChange = ({ target }) => {
    this.setState({ produtos: target.value });
  };

  render() {
    const { categorias, listaProdutos } = this.state;
    return (
      <>
        {/*  // Props InputButton renderizada */}
        <InputButton
          handleChange={ this.handleChange }
          ativandoBotao={ this.ativandoBotao }
        />
        {/*  // Props Card renderizada */}
        { listaProdutos
          ? <Card listaProdutos={ listaProdutos } />
          : (
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          )}
        {/*   Link e button criado para redirecionar para a página do shopping card do requisito 3 */}
        <Link
          data-testid="shopping-cart-empty-message"
          to="/shoppingcard"
        >
          <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        </Link>
        {/*  // Props Category renderizada */}
        <Category categorias={ categorias } ativandoBotao={ this.ativandoBotao } />
      </>
    );
  }
}
