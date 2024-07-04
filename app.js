document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
 
 
    let totalPrice = 0;
 
 
    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.closest('.product');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('R$', '').replace(',', '.'));
 
 
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - R$ ${productPrice.toFixed(2).replace('.', ',')}`;
            cartItems.appendChild(cartItem);
 
 
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2).replace('.', ',');
        });
    });
 });
 