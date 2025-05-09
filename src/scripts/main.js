import { fetchProducts } from './api.js';
import { createProductCard } from './card.js';
import { initializeCartSidebar } from './cart.js';
import { showErrorToast } from './toast.js';

let allProducts = []; // ← almacenamos todos los productos para búsquedas

const renderProducts = (products, container) => {
  container.innerHTML = ''; // limpiar antes de renderizar nuevos
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
};

const init = async () => {
  const loadingContainer = document.getElementById('loading-container');
  const productContainer = document.getElementById('product-container');
  const searchInput = document.getElementById('searchInput');

  try {
    initializeCartSidebar();
    const products = await fetchProducts();
    allProducts = products;

    renderProducts(allProducts, productContainer);
    loadingContainer.classList.add('d-none');
    productContainer.classList.remove('d-none');

    // Buscador funcional
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allProducts.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
        );
        renderProducts(filtered, productContainer);
      });
    }

  } catch (error) {
    showErrorToast("Ocurrió un error al cargar los productos");
    console.error('Error loading products:', error);
  }
};

document.addEventListener('DOMContentLoaded', init);
