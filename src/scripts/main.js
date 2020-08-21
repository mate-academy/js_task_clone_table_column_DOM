'use strict';

// write your code here

const list = document.querySelector('table');

for (let i = 0; i < list.rows.length; i++) {
  const penultimateIndex = list.rows[i].cells.length - 1;

  if (list.rows[i].cells[0].tagName === 'TH') {
    const th = document.createElement('th');

    th.textContent = list.rows[i].cells[1].textContent;
    list.rows[i].insertBefore(th, list.rows[i].cells[penultimateIndex]);
  } else {
    const td = document.createElement('td');

    td.textContent = list.rows[i].cells[1].textContent;
    list.rows[i].insertBefore(td, list.rows[i].cells[penultimateIndex]);
  }
}
