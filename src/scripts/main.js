'use strict';

const secondColumn = document.querySelector('table');

const mass = [...secondColumn.rows];

for (let i = 0; i <= mass.length; i++) {
  if (i === 0 || i === mass.length - 1) {
    const createTh = document.createElement('th');

    createTh.textContent = secondColumn.rows[i].cells[1].innerHTML;
    mass[i].insertBefore(createTh, mass[i].children[4]);
  } else {
    const createTd = document.createElement('td');

    createTd.textContent = secondColumn.rows[i].cells[1].innerHTML;

    mass[i].insertBefore(createTd, mass[i].children[4]);
  }
};
