export function initializeCartSidebar() {
    const cartButton = document.getElementById('cartButton');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
  
    function openCartSidebar() {
      cartSection(); // renderizar carrito
      cartSidebar.classList.add('cart-sidebar--open');
      cartOverlay.classList.add('cart-overlay--active');
      document.body.classList.add('body--no-scroll');
    }
  
    function closeCartSidebar() {
      cartSidebar.classList.remove('cart-sidebar--open');
      cartOverlay.classList.remove('cart-overlay--active');
      document.body.classList.remove('body--no-scroll');
    }
  
    cartButton.addEventListener('click', openCartSidebar);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
  
    return {
      openCart: openCartSidebar,
      closeCart: closeCartSidebar
    };
  }
  
  export function cartSection() {
    const canvaBody = document.getElementById("cartItems");
    const dataLs = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  
    canvaBody.innerHTML = ""; // Limpiar antes de renderizar
  
    dataLs.forEach((p, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "card mb-3";
      cartItem.style.maxWidth = "540px";
      cartItem.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${p.image}" class="img-fluid rounded-start" alt="${p.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title text-truncate mb-0">${p.title}</h5>
                <button class="btn btn-sm btn-danger" data-action="delete" data-index="${index}" title="Eliminar">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="d-flex align-items-center gap-2 mt-2">
                <button class="btn btn-sm btn-outline-primary" data-action="decrease" data-index="${index}">-</button>
                <span class="quantity">${p.quantity}</span>
                <button class="btn btn-sm btn-outline-primary" data-action="increase" data-index="${index}">+</button>
              </div>
            </div>
          </div>
        </div>
      `;
      canvaBody.appendChild(cartItem);
    });
  
    // Botones funcionales
    canvaBody.querySelectorAll("button[data-action]").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-index"));
        const action = btn.getAttribute("data-action");
  
        let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  
        if (action === "increase") {
          cart[index].quantity += 1;
        } else if (action === "decrease") {
          cart[index].quantity -= 1;
          if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
          }
        } else if (action === "delete") {
          cart.splice(index, 1);
        }
  
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        cartSection();
        updateCartCount();
        updateCartTotal();
      });
    });
  
    updateCartTotal();
  }
  
  export function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const totalElement = document.getElementById("cartTotal");
    if (totalElement) {
      totalElement.textContent = `$${total.toFixed(2)}`;
    }
  }
  
  export function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      cartCountElement.textContent = totalCount;
    }
const clearCartBtn = document.getElementById("clearCartBtn");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("shoppingCart");
    cartSection();       // vuelve a renderizar vacío
    updateCartCount();   // reinicia el contador
    updateCartTotal();   // reinicia el total
  });
}
  }
  