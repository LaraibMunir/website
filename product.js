// Simulated API fetching function for all products by category
function fetchProductsByCategory(category) {
    return new Promise((resolve) => {
        const products = {
            silk: [
                { id: '1', name: 'Silk Scarf 1', price: '$10', description: 'High-quality silk scarf.', image: 'assets/silk_scarf_1.jpg' },
                { id: '2', name: 'Silk Scarf 2', price: '$12', description: 'Luxurious silk scarf.', image: 'asset/ORGANZA.jpeg' },
            ],
            organza: [
                { id: '3', name: 'Organza Scarf 1', price: '$15', description: 'Elegant organza scarf.', image: 'assets/organza_scarf_1.jpg' },
                { id: '4', name: 'Organza Scarf 2', price: '$18', description: 'Beautiful organza scarf.', image: 'assets/organza_scarf_2.jpg' },
            ],
            crinkle: [
                { id: '5', name: 'Crinkle Scarf 1', price: '$8', description: 'Stylish crinkle scarf.', image: 'assets/crinkle_scarf_1.jpg' },
                { id: '6', name: 'Crinkle Scarf 2', price: '$10', description: 'Comfortable crinkle scarf.', image: 'assets/crinkle_scarf_2.jpg' },
            ],
            lawn: [
                { id: '7', name: 'Lawn Scarf 1', price: '$5', description: 'Soft lawn scarf.', image: 'assets/lawn_scarf_1.jpg' },
                { id: '8', name: 'Lawn Scarf 2', price: '$6', description: 'Lightweight lawn scarf.', image: 'assets/lawn_scarf_2.jpg' },
            ],
            scrunchies: [
                { id: '9', name: 'Scrunchie 1', price: '$3', description: 'Fashionable scrunchie.', image: 'assets/scrunchie_1.jpg' },
                { id: '10', name: 'Scrunchie 2', price: '$4', description: 'Trendy scrunchie.', image: 'assets/scrunchie_2.jpg' },
            ],
            magnetPins: [
                { id: '11', name: 'Magnet Pin 1', price: '$2', description: 'Strong magnet pin.', image: 'assets/magnet_pin_1.jpg' },
                { id: '12', name: 'Magnet Pin 2', price: '$3', description: 'Durable magnet pin.', image: 'assets/magnet_pin_2.jpg' },
            ]
        };
        resolve(products[category] || []);
    });
}

// Simulated API fetching function for product details by ID
function fetchProductById(productId) {
    return new Promise((resolve) => {
        const products = {
            silk: [
                { id: '1', name: 'Silk Scarf 1', price: '$10', description: 'High-quality silk scarf.', image: 'assets/silk_scarf_1.jpg' },
                { id: '2', name: 'Silk Scarf 2', price: '$12', description: 'Luxurious silk scarf.', image: 'asset/ORGANZA.jpeg' },
            ],
            organza: [
                { id: '3', name: 'Organza Scarf 1', price: '$15', description: 'Elegant organza scarf.', image: 'assets/organza_scarf_1.jpg' },
                { id: '4', name: 'Organza Scarf 2', price: '$18', description: 'Beautiful organza scarf.', image: 'assets/organza_scarf_2.jpg' },
            ],
            crinkle: [
                { id: '5', name: 'Crinkle Scarf 1', price: '$8', description: 'Stylish crinkle scarf.', image: 'assets/crinkle_scarf_1.jpg' },
                { id: '6', name: 'Crinkle Scarf 2', price: '$10', description: 'Comfortable crinkle scarf.', image: 'assets/crinkle_scarf_2.jpg' },
            ],
            lawn: [
                { id: '7', name: 'Lawn Scarf 1', price: '$5', description: 'Soft lawn scarf.', image: 'assets/lawn_scarf_1.jpg' },
                { id: '8', name: 'Lawn Scarf 2', price: '$6', description: 'Lightweight lawn scarf.', image: 'assets/lawn_scarf_2.jpg' },
            ],
            scrunchies: [
                { id: '9', name: 'Scrunchie 1', price: '$3', description: 'Fashionable scrunchie.', image: 'assets/scrunchie_1.jpg' },
                { id: '10', name: 'Scrunchie 2', price: '$4', description: 'Trendy scrunchie.', image: 'assets/scrunchie_2.jpg' },
            ],
            magnetPins: [
                { id: '11', name: 'Magnet Pin 1', price: '$2', description: 'Strong magnet pin.', image: 'assets/magnet_pin_1.jpg' },
                { id: '12', name: 'Magnet Pin 2', price: '$3', description: 'Durable magnet pin.', image: 'assets/magnet_pin_2.jpg' },
            ]
        };

        // Find the product in all categories
        let product;
        for (const category in products) {
            product = products[category].find(p => p.id === productId);
            if (product) break;
        }
        resolve(product);
    });
}

// Example function to display product details and set image
function displayProductDetails(productId) {
    fetchProductById(productId).then(product => {
        if (product) {
            // Set product name
            document.getElementById('product-name').textContent = product.name;

            // Set product price
            document.getElementById('product-price').textContent = product.price;

            // Set product description
            document.getElementById('product-description').textContent = product.description;

            // Set product image
            var img = document.getElementById('product-image');
            img.src = product.image;
            img.alt = product.name;
        }
    });
}

// Example usage: Display product details for product with ID '1'
displayProductDetails('1');
