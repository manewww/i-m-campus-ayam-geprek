// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// ketika hamburger menu di klik
hamburger.onclick = (e) => {
    e.preventDefault();                 // ⬅️ cegah <a href="#"> lompat ke atas
    navbarNav.classList.toggle('active');
};

// Shopping cart element
const shoppingCartButton = document.querySelector('#shopping-cart-button');
const shoppingCart = document.querySelector('.shopping-cart');

// klik di luar sidebar untuk menghilangkan nav atau cart
document.addEventListener('click', function (e) {
    // Tutup navbar
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    // Tutup shopping cart
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// toggle class active untuk shopping cart
shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


