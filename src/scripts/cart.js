export function initializeCartSidebar() {
    const cartButton = document.getElementById('cartButton');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');

    function openCartSidebar() {
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