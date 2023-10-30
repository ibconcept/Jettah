document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
    const categorySelect = document.getElementById('category');

    const products = [
        { category: 'Toys', name: '1', image: '1.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '2.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '3.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '4.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '5.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '5.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '6.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '7.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '8.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '9.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '10.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '11.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '12.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '13.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '14.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '15.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '16.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '17.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '18.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '19.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '20.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '21.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '22.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '23.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '24.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '25.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '26.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '27.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '28.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '124.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '125.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '126.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '127.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '128.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '129.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '130.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '131.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '132.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '133.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '134.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '135.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '136.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '136.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '137.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '138.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '139.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '140.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '141.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '142.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '143.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: '144.jpg', specs: 'red', price: 'KES 50' },



















                 // Add more products here
    ];

    // Initial card generation
    generateCards(products);

    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
        cardsContainer.innerHTML = ''; // Clear existing cards
        generateCards(filteredProducts);
    });

    function generateCards(products) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.specs}</p>
                <p>${product.price}</p>
            `;
            cardsContainer.appendChild(card);
        });
    }
});
