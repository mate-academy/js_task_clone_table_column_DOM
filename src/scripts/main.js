'use strict';

const th = document.createElement('th');
const arrayTr = document.querySelectorAll('thead tr');
const lastTh = arrayTr[0].querySelector('th:last-child');

const secondTh = arrayTr[0].querySelectorAll('th')[1];

th.textContent = secondTh.textContent;

arrayTr[0].insertBefore(th, lastTh);

const tBodyTr = document.querySelectorAll('tbody tr');

for (let i = 0; i < tBodyTr.length; i++) {
  const cells = tBodyTr[i].querySelectorAll('td');
  const td = document.createElement('td');

  td.textContent = cells[1].textContent;

  const lastTd = tBodyTr[i].querySelector('td:last-child');

  tBodyTr[i].insertBefore(td, lastTd);
}

const th2 = document.createElement('th');
const arrayTr2 = document.querySelectorAll('tfoot tr');
const lastTh2 = arrayTr2[0].querySelector('th:last-child');

const secondTh2 = arrayTr2[0].querySelectorAll('th')[1];

th2.textContent = secondTh2.textContent;

arrayTr2[0].insertBefore(th2, lastTh2);
