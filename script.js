document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
    const categorySelect = document.getElementById('category');

    const products = [
        { category: 'Toys', name: '1', image: 'images/1.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/2.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/3.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/4.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/5.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/5.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/6.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/7.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/8.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/9.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/10.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/11.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/12.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/13.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/14.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/15.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/16.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/17.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/18.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/19.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/20.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/21.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/22.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/23.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/24.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/25.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/26.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/27.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/28.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/124.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/125.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/126.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/127.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/128.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/129.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/130.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/131.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/132.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/133.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/134.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/135.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/136.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/136.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/137.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/138.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/139.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/140.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/141.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/142.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/143.jpg', specs: 'red', price: 'KES 50' },
        { category: 'Toys', name: '1', image: 'images/144.jpg', specs: 'red', price: 'KES 50' },



















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
