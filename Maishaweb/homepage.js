let cartCount = 0;

function updateCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', updateCart);
});
