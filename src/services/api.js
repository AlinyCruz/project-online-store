export async function getCategories() {
  const categorias = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await categorias.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const produtos = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await produtos.json();
  return data.results;
}

export async function getProductById(productId) {
  const produtos = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await produtos.json();
  return data;
}
