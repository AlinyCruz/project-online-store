import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* import { getProductById } from '../services/api'; */

export default class Details extends Component {
  state = {
    productId: {},
  };

  /* componentDidMount() {
    this.teste();
  }

  teste = async () => {
    const id = JSON.parse(localStorage.getItem('detailsId'));
    const details = await getProductById(id);
    this.setState({
      productId: details,
    });
  }; */

  async componentDidMount() {
    const infos = JSON.parse(localStorage.getItem('detailsId'));
    this.setState({
      productId: infos,
    });
  }

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
        </div>
      </div>
    );
  }
}
