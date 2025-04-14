import { fetchProducts } from './api.js';
import { createProductCard } from './card.js';
import { initializeCartSidebar } from './cart.js';
import { showErrorToast } from './toast.js';

const init = async () => {
  const loadingContainer = document.getElementById('loading-container');
  const productContainer = document.getElementById('product-container');

  try {
    initializeCartSidebar();
    const products = await fetchProducts();

    products.forEach(product => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });

    loadingContainer.classList.add('d-none');
    productContainer.classList.remove('d-none');
  } catch (error) {
    showErrorToast("Ocurrio un error al cargar los productos");
    console.error('Error loading products:', error);
  }
};

document.addEventListener('DOMContentLoaded', init);