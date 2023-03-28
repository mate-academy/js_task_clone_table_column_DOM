'use strict';

const trElement = document.querySelectorAll('tr');

trElement.forEach(item => {
  const positionElement = item.cells[1];

  const lastCell = item.cells[item.cells.length - 1];

  lastCell.parentNode.insertBefore(positionElement.cloneNode(true), lastCell);
});
