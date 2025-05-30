'use strict';

const th = document.createElement('th');
const arrayTr = document.querySelectorAll('thead tr');
const arrayTh = arrayTr[0].querySelectorAll('th');

th.textContent = arrayTh[1].textContent;
arrayTr[0].insertBefore(th, arrayTh[arrayTh.length - 1]);

const tBodyTr = document.querySelectorAll('tbody tr');

for (let i = 0; i < tBodyTr.length; i++) {
  const cells = tBodyTr[i].querySelectorAll('td');
  const td = document.createElement('td');

  td.textContent = cells[1].textContent;
  tBodyTr[i].insertBefore(td, cells[cells.length - 1]);
}

const th2 = document.createElement('th');
const arrayTr2 = document.querySelectorAll('tfoot tr');
const arrayTh2 = arrayTr2[0].querySelectorAll('th');

th2.textContent = arrayTh2[1].textContent;
arrayTr2[0].insertBefore(th2, arrayTh2[arrayTh2.length - 1]);
