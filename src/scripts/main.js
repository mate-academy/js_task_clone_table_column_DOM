'use strict';

const rows = document.querySelectorAll('tr');

[...rows].forEach((row) => {
  const cells = row.querySelectorAll('td, th');
  const newCell = document.createElement(row.querySelector('th') ? 'th' : 'td');
  const elem = cells[1];
  const lastElem = cells[cells.length - 1];

  if (elem) {
    newCell.innerText = elem.innerText;

    if (lastElem) {
      lastElem.before(newCell);
    }
  }
});
