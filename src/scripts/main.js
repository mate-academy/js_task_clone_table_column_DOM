'use strict';

const headClone = document.querySelectorAll('thead th')[1].cloneNode(true);
const headPlace = document.querySelectorAll('thead th')[3];

headPlace.after(headClone);

const bodyClone = document.querySelectorAll('tfoot th')[1].cloneNode(true);
const bodyPlace = document.querySelectorAll('tfoot th')[3];

bodyPlace.after(bodyClone);

function copyText(list) {
  for (let i = 1; i < list.length; i += 5) {
    const insidePlace = i + 2;

    list[insidePlace].after(list[i].cloneNode(true));
  }
}

copyText(document.querySelectorAll('tbody td'));
