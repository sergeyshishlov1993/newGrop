window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.header__menu'),
          close = document.querySelector('.header__menu-close'),
          active = document.querySelector('.header__menu-active'),
          promoTitle = document.querySelector('.promo__title'),
          promoBtn = document.querySelectorAll('#btn');
          
    const modalWindow = document.querySelector('.header__modal'),
          phone = document.querySelector('.header__phone'),
          closeModal = document.querySelector('.header__modal-close'),
          btnModal = document.querySelector('.button_modal'),
          inputModal = document.querySelectorAll('#inputModal');
    

    const inputClear = function (btn, input) {
            btn.addEventListener('click', () => {
              input.forEach(item => {
                item.value = ''
              });
            })
    };
    
    inputClear(btnModal,inputModal);
          

    const hideContent = () => {
          menu.classList.remove('header__menu-active');
          modalWindow.classList.remove('header__modal-active');

          };

    const showMenu = function() {
            hamburger.addEventListener('click', () => {
              menu.classList.add('header__menu-active');
              close.style.visibility ='visible';
              hamburger.style.visibility ='hidden';
              promoTitle.style.visibility ='hidden';
              promoBtn.forEach(item => item.style.visibility = 'hidden');
        });
        active.addEventListener('click', () => {
            hideContent();
            close.style.visibility = 'hidden'; 
            hamburger.style.visibility ='visible';
            promoTitle.style.visibility ='visible';
            promoBtn.forEach(item => item.style.visibility = 'visible');   
    });
          };

      const showModalWindow = function () {
            phone.addEventListener('click', () => {
              modalWindow.classList.add('header__modal-active')
            });

            closeModal.addEventListener('click', () => {
              hideContent();
            });
          };

          hideContent();
          showMenu();
          showModalWindow();
});