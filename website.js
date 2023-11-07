let cartItems = [];
let totalAmount = 0;

function purchaseItem(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalAmountElement = document.getElementById("total-amount");

    cartItemsElement.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });

    totalAmountElement.textContent = totalAmount;
}

function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
    } else {
        alert(`Thank you for your purchase! Your total amount is $${totalAmount}.`);
        // Here you would typically send the order to a server for processing.
        // For security reasons, real e-commerce websites do not process payments solely on the client-side.
        // In a real application, you should use a payment gateway and secure server-side processing.
        // This example is simplified for demonstration purposes.
        
        cartItems = [];
        totalAmount = 0;
        updateCart();
    }
}



document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu-list').classList.toggle('active');
});
