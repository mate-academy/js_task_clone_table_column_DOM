'use strict';

const columns = [...document.querySelectorAll('th')];
const rows = [...document.querySelectorAll('tr')];

function createNewTh(textContent) {
  const th = document.createElement('th');

  th.textContent = textContent;

  return th;
}

const copiedColumn = columns[1].textContent;

const newThContent = copiedColumn;

columns[4].insertAdjacentElement('beforebegin', createNewTh(newThContent));

columns[9].insertAdjacentElement('beforebegin', createNewTh(newThContent));

rows.forEach((row) => {
  const cells = [...row.querySelectorAll('td')];

  if (cells.length > 1) {
    const newCell = document.createElement('td');

    newCell.textContent = cells[1].textContent;

    row.insertBefore(newCell.cloneNode(true), cells[4]);
  }
});
