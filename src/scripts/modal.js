export const openProductModal = (product) => {
    const modalContainer = document.getElementById('productModal');
    const modalTitle = modalContainer.querySelector('.modal-title');
    const modalBody = modalContainer.querySelector('.modal-body');
  
    modalTitle.textContent = product.title;
  
    modalBody.innerHTML = `
      <div class="row g-3 align-items-center">
        <!-- Imagen -->
        <div class="col-12 col-md-5 text-center">
          <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" style="max-height: 300px; object-fit: contain;">
        </div>
  
        <!-- Detalles del producto -->
        <div class="col-12 col-md-7">
            <p>${product.description}</p>
            <p><strong>Categoría:</strong> ${product.category}</p>
          <p><strong>Precio:</strong> $${product.price.toFixed(2)}</p>
          <button id="addToCartBtn" class="btn btn-primary mt-2 w-100">Agregar al carrito 🛒</button>
        </div>
      </div>
    `;
  
    // Agregar funcionalidad al botón
    setTimeout(() => {
      const addToCartBtn = document.getElementById('addToCartBtn');
      addToCartBtn.addEventListener('click', () => {
        // Lógica para agregar al carrito 
        console.log(`Producto agregado al carrito: ${product.title}`);
        alert(`"${product.title}" fue agregado al carrito`);
      });
    }, 0);
  
    const modal = new bootstrap.Modal(modalContainer);
    modal.show();
  };
  