// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Vela Café",
        price: "15€",
        description: "Acalmante aroma de lavanda para momentos de relaxamento e paz interior.",
        image: "images/vela_marrom.jpeg"
    },
    {
        id: 2,
        name: "Vela Baunilha",
        price: "460€",
        description: "Doce e aconchegante, perfeita para criar um ambiente acolhedor em qualquer espaço.",
        image: "images/vela_branca.jpeg"
    },
    {
        id: 3,
        name: "Vela Canela",
        price: "1.500€",
        description: "Frescor cítrico que além de perfumar, ajuda a afastar insetos indesejados.",
        image: "images/vela_branca2.jpeg"
    },
];

// Elementos DOM
const productsGrid = document.querySelector('.products-grid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Função para carregar produtos
function loadProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
                <button class="product-button" data-id="${product.id}">Comprar no WhatsApp</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Adicionar event listeners aos botões
    document.querySelectorAll('.product-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            
            if (product) {
                const message = `Olá! Gostaria de comprar a ${product.name} no valor de ${product.price}.`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/351924709328?text=${encodedMessage}`, '_blank');
            }
        });
    });
}

// Menu mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de mudança na navbar ao scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    
    // Adicionar ano atual no footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').textContent = `© ${currentYear} XXX. Todos os direitos reservados.`;
});