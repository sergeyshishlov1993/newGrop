window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.header__menu'),
          close = document.querySelector('.header__menu-close'),
          active = document.querySelector('.header__menu-active'),
          promoTitle = document.querySelector('.promo__title'),
          promoBtn = document.querySelectorAll('#btn');

    const showMenu  = () => {
        menu.classList.add('header__menu-active')
    };
    const hideMenu = () => {
        menu.classList.remove('header__menu-active')
    };
    const activeMenu = () => {
        hamburger.addEventListener('click', (e) => {
                showMenu();
               close.style.visibility = 'visible';
               hamburger.style.visibility ='hidden';
               promoTitle.style.visibility ='hidden';
               promoBtn.forEach(item => item.style.visibility = 'hidden');
        });
    };
    const deleteActive = () => {
        active.addEventListener('click', (event) => {
                hideMenu();
                close.style.visibility = 'hidden'; 
                hamburger.style.visibility ='visible';
                promoTitle.style.visibility ='visible';
                promoBtn.forEach(item => item.style.visibility = 'visible');
                
        });
    };
    deleteActive();
    activeMenu();
    hideMenu();
    
})