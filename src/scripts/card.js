import { openProductModal } from './modal.js';

export const createProductCard = (product) => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

  const card = document.createElement('div');
  card.className = 'card h-100 shadow-sm';

  card.innerHTML = `
    <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
    <div class="card-body d-flex flex-column">
      <h6 class="card-title">${product.title}</h6>
      <button class="btn btn-primary mt-auto">Ver más</button>
    </div>
  `;

  const btn = card.querySelector('button');
  btn.addEventListener('click', () => openProductModal(product));

  col.appendChild(card);
  return col;
};
