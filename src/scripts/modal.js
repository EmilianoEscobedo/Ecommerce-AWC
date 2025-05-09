import { showAddToCartToast } from './toast.js';

const CART_KEY = 'shoppingCart';

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = totalCount;
  }
}

export const openProductModal = (product) => {
  const modalContainer = document.getElementById('productModal');
  const modalTitle = modalContainer.querySelector('.modal-title');
  const modalBody = modalContainer.querySelector('.modal-body');

  modalTitle.textContent = product.title;

  modalBody.innerHTML = `
    <div class="row g-3 align-items-center">
      <div class="col-12 col-md-5 text-center">
        <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" style="max-height: 300px; object-fit: contain;">
      </div>
      <div class="col-12 col-md-7">
        <p>${product.description}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <button id="addToCartBtn" class="btn btn-primary mt-2 w-100">Add to cart 🛒</button>
      </div>
    </div>
  `;

  setTimeout(() => {
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', () => {
      addToCart(product);
      showAddToCartToast(product.title);
    });
  }, 0);

  const modal = new bootstrap.Modal(modalContainer);
  modal.show();
};
