'use strict';

const rows = document.querySelector('table').rows;

for (let i = 0; i < rows.length; i++) {
  let cell = document.createElement('td');

  if (i === 0 || i === rows.length - 1) {
    cell = document.createElement('th');
  } else {
    cell = document.createElement('td');
  }

  cell.innerText = rows[i].children[1].innerText;

  rows[i].children[4].before(cell);
}
