// toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();

};

//toggle class active shopping card
const searchCard = document.querySelector('.shoppingcart');
document.querySelector('#shopping-cart-button').onclick = () => {
    searchCard.classList.toggle('active');
}

// klick diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button')

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }


    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!sc.contains(e.target) && !searchCard.contains(e.target)) {
        searchCard.classList.remove('active');
    }
});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});


// Click tombol clode
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// click diluar modal
window.onclick = (e) => {
    if (e.target == itemdetailmodal) {
        modal.style.display = 'none';
    }
};