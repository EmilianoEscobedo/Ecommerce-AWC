import { fetchProducts } from './api.js';
import { createProductCard } from './card.js';

const container = document.getElementById('product-container');

const init = async () => {
  const products = await fetchProducts();
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
};



init();
