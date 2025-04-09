import { openProductModal } from './modal.js';

export const createProductCard = (product) => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

  const card = document.createElement('div');
  card.className = 'card product-card h-100 shadow-sm';

  card.innerHTML = `
    <img src="${product.image}" class="product-card__image card-img-top p-3" alt="${product.title}">
    <div class="product-card__body card-body d-flex flex-column">
      <h6 class="product-card__title card-title">${product.title}</h6>
      <button class="product-card__button btn btn-primary mt-auto">Ver más</button>
    </div>
  `;

  const btn = card.querySelector('button');
  btn.addEventListener('click', () => openProductModal(product));

  col.appendChild(card);
  return col;
};
