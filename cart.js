// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();

    // Add event listener for the "Continue Shopping" button
    const continueShoppingBtn = document.getElementById('continue-shopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function () {
            window.location.href = 'shop.html'; // Redirect to the shop page
        });
    }

    // Add event listener for the "Proceed" button
    const proceedCheckoutBtn = document.getElementById('proceed-checkout');
    if (proceedCheckoutBtn) {
        proceedCheckoutBtn.addEventListener('click', function () {
            proceedToWhatsApp(); // Proceed to WhatsApp with cart details
        });
    }
});

// Load cart from localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || []; // Load cart or return empty array if no items
}

// Display cart items on the cart page
function displayCartItems() {
    const cart = loadCart();
    const cartContainer = document.getElementById('cart-container');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceContainer.innerText = `Total: $0`;
        return;
    }

    // Clear the container
    cartContainer.innerHTML = '';

    // Display each product in the cart
    cart.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('cart-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Total: $${product.price * product.quantity}</p>
        `;
        cartContainer.appendChild(productItem);

        totalPrice += product.price * product.quantity;
    });

    // Display total price
    totalPriceContainer.innerText = `Total: $${totalPrice}`;
}

// Function to proceed to WhatsApp with cart details
function proceedToWhatsApp() {
    const cart = loadCart();
    
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    // Create the message for WhatsApp
    let message = 'I want to purchase the following items:\n\n';
    cart.forEach(product => {
        message += `- ${product.name} (Quantity: ${product.quantity})\n`;
    });

    const encodedMessage = encodeURIComponent(message); // Encode the message for URL
    const phoneNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with the WhatsApp number you want to send to (include country code without +)

    // Redirect to WhatsApp with the message
    const whatsappURL = `https://wa.me/923314487736?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
}

