'use strict';

const th = document.querySelectorAll('th');
const td = document.querySelectorAll('td');
const columnsAmount = document.querySelector('thead').rows[0].cells.length;

function cloneCells(arg, step) {
  for (let i = 1; i < arg.length; i += step) {
    const clone = arg[i].cloneNode(true);

    arg[i + 2].after(clone);
  }
}

cloneCells(th, columnsAmount);
cloneCells(td, columnsAmount);
