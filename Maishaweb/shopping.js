document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transition = 'transform 0.3s, background 0.3s';
    });

    product.addEventListener('mouseleave', () => {
        product.style.transition = 'transform 0.3s, background 0.3s';
    });
});
const colors = ["#ffe6f2", "#ffccdd", "#ffb3c6", "#ff99b9", "#ff80a6"]; 
let index = 0;

function changeBackground() {
    document.body.style.background = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(changeBackground, 3000);
