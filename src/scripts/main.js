'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

rows.forEach((el) => {
  if (el.cells.length >= 2) {
    const newS = el.cells[1].cloneNode(true);

    el.insertBefore(newS, el.cells[el.cells.length - 1]);
  }
});
