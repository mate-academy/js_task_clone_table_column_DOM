'use strict';

const table = [...document.querySelector('table').rows];

for (const key of table) {
  const el = key.cells[1].innerHTML;

  key.cells[3].insertAdjacentHTML(
    'afterend',
    `<td>${el}</td>`
  );
}
