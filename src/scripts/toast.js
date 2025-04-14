export function showToast(message, icon = 'success', timer = 3000) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true
    });

    Toast.fire({
        icon: icon,
        title: message
    });
}

export function showAddToCartToast(productTitle) {
    showToast(`"${productTitle}" fue agregado al carrito 🛒`, 'success');
}

export function showErrorToast(message) {
    showToast(message, 'error');
}