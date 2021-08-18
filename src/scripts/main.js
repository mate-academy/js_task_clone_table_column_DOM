'use strict';

const columns = document.querySelectorAll('tr');

function getLastColumn(person) {
  const cell = person.children[1];

  const newCell = document.createElement(cell.tagName);

  newCell.textContent = cell.textContent.trim();

  person.insertBefore(newCell, person.children[4]);
}

[...columns].map(getLastColumn);
