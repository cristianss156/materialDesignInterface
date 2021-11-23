'use strict';

let cards = document.getElementsByClassName('card');
for (let card in cards) {

  if (cards[card] instanceof HTMLElement) {
    cards[card].addEventListener('click', (event) => {

      for (let card in cards) {
        if (cards[card] instanceof HTMLElement) cards[card].classList.remove('cardActive');
      };
      event.target.classList.add('cardActive');

    });
  }

};

document.getElementById('contMenuIcon').addEventListener('click', (event) => {

  let menu = document.getElementById('menu');
  if (!menu.classList.contains('menu_active')) {

    let cont = document.getElementById('contenedorMenu');
    cont.classList.add('contenedorMenu_active');

    menu.classList.remove('menu_hide');
    menu.classList.add('menu_active');
  }

});

document.getElementById('contenedorMenu').addEventListener('click', (event) => {

  menu.classList.remove('menu_active');
  menu.classList.add('menu_hide');
  let cont = document.getElementById('contenedorMenu');
  cont.classList.remove('contenedorMenu_active');

});