'use strict';

let cards = document.getElementsByClassName('card');
for (let card in cards) {

  if (cards[card] instanceof HTMLElement) {
    cards[card].addEventListener('click', (event) => {

      let comp = true;

      if (event.target.classList.contains('cardActive')) {
        comp = false;
      }

      for (let card in cards) {
        if (cards[card] instanceof HTMLElement) cards[card].classList.remove('cardActive');
      };
      if(comp) event.target.classList.add('cardActive');

    });
  }

};

document.getElementById('contMenuIcon').addEventListener('click', () => {

  let menu = document.getElementById('menu');
  if (!menu.classList.contains('menu_active')) {

    let cont = document.getElementById('contenedorMenu');
    cont.classList.add('contenedorMenu_active');

    menu.classList.remove('menu_hide');
    menu.classList.add('menu_active');
  }

});

document.getElementById('contenedorMenu').addEventListener('click', () => {

  menu.classList.remove('menu_active');
  menu.classList.add('menu_hide');
  let cont = document.getElementById('contenedorMenu');
  cont.classList.remove('contenedorMenu_active');

});

document.getElementById('arriba').addEventListener('click', () => {

  window.scrollTo(0, 0);

});

// evento que se ejecuta cuando se hace scroll
window.onscroll = () => {
  // se obtiene el tamaño del scroll
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  let header = document.getElementById('header');
  
  let arriba = document.getElementById('contenedorArriba');
  let title = document.getElementById('titulo');
  
  if (scroll >= 190) {
    header.classList.add('collapseHeader');
    title.classList.add('titulo_collapse');
    title.classList.remove('titulo_spawn');
    arriba.classList.add('activeUp');
  } else {
    header.classList.remove('collapseHeader');
    if (title.classList.contains('titulo_collapse')) title.classList.add('titulo_spawn');
    title.classList.remove('titulo_collapse');
    arriba.classList.remove('activeUp');
  }

};