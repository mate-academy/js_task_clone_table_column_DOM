'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(row => {
  const columnToClone = row.cells[1];
  const tagToCreate = document.createElement(columnToClone.tagName);

  tagToCreate.textContent = columnToClone.textContent;
  row.cells[row.cells.length - 1].before(tagToCreate);
});
