'use strict';

const cells = document.querySelectorAll('tr');

for (const cell of cells) {
  if (cell.children[1].tagName === 'TH') {
    const newTh = document.createElement('th');

    newTh.textContent = cell.children[1].textContent;
    cell.insertBefore(newTh, cell.children[4]);
  }

  if (cell.children[1].tagName === 'TD') {
    const newTd = document.createElement('td');

    newTd.textContent = cell.children[1].textContent;
    cell.insertBefore(newTd, cell.children[4]);
  }
}
