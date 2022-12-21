'use strict';

const rows = document.querySelector('table').rows;

for (let i = 0; i < rows.length; i++) {
  let el = document.createElement('td');

  if (i === 0 || i === rows.length - 1) {
    el = document.createElement('th');
  }

  el.textContent = rows[i].children[1].textContent;
  rows[i].insertBefore(el, rows[i].children[4]);
}
