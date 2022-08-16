'use strict';

// write your code here
const hClone = document.querySelectorAll('thead th')[1].cloneNode(true);
const place = document.querySelectorAll('thead th')[3];

place.after(hClone);

const fClone = document.querySelectorAll('tfoot th')[1].cloneNode(true);
const place1 = document.querySelectorAll('tfoot th')[3];

place1.after(fClone);

function bClone(list) {
  for (let i = 1; i < list.length; i += 5) {
    const placeI = i + 2;

    list[placeI].after(list[i].cloneNode(true));
  }
}

bClone(document.querySelectorAll('tbody td'));
