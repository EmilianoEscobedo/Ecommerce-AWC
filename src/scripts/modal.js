import { showAddToCartToast } from './toast.js';

export const openProductModal = (product) => {
  const modalContainer = document.getElementById('productModal');
  const modalTitle = modalContainer.querySelector('.modal-title');
  const modalBody = modalContainer.querySelector('.modal-body');

  modalTitle.textContent = product.title;

  modalBody.innerHTML = `
    <div class="row g-3 align-items-center">
      <!-- Image -->
      <div class="col-12 col-md-5 text-center">
        <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" style="max-height: 300px; object-fit: contain;">
      </div>

      <!-- Product details -->
      <div class="col-12 col-md-7">
        <p>${product.description}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <button id="addToCartBtn" class="btn btn-primary mt-2 w-100">Add to cart 🛒</button>
      </div>
    </div>
  `;

  // Add functionality to "Add to cart" button
  setTimeout(() => {
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', () => {
      // Cart logic can go here
      showAddToCartToast(product.title);
    });
  }, 0);

  const modal = new bootstrap.Modal(modalContainer);
  modal.show();
};
