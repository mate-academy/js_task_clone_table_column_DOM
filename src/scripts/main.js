'use strict';

const cellsInRow = document.querySelectorAll('tr');

cellsInRow.forEach(element => {
  element.lastElementChild
    .insertAdjacentElement('beforebegin', element.cells[1].cloneNode(true));
});
