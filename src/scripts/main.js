/* eslint-disable comma-dangle */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tableInit = () => {
    const cellsInRow = document.querySelectorAll('tr');

    if (cellsInRow.length) {
      cellsInRow.forEach((element) => {
        const clonedCell = element.cells[1].cloneNode(true);

        element.lastElementChild.insertAdjacentElement(
          'beforebegin',
          clonedCell
        );
      });
    }
  };

  tableInit();
});
