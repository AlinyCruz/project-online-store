import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <>
        <input type="search" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </>
    );
  }
}
