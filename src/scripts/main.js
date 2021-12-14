'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  if (table.rows[i].parentElement === table.tHead
    || table.rows[i].parentElement === table.tFoot) {
    table.rows[i].insertAdjacentHTML(
      'beforeend', `<th>${table.rows[i].cells[1].innerHTML}</th>`);
  } else {
    table.rows[i].insertAdjacentHTML(
      'beforeend', `<td>${table.rows[i].cells[1].innerHTML}</td>`);
  }
}

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].append(table.rows[i].cells[4]);
}
