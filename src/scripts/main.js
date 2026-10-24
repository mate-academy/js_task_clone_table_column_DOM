'use strict';

const table = document.querySelector('table');

const parts = [...table.children];

parts.forEach((part) => {
  const rowsOfPart = [...part.children];

  rowsOfPart.forEach((row) => {
    const cells = [...row.children];
    const copyOfSecondElement = cells[1].cloneNode(true);
    const indexOfLastElement = cells.length - 1;

    cells[indexOfLastElement].before(copyOfSecondElement);
  });
});
