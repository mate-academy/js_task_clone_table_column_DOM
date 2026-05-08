'use strict';

const lastColumns = [
  ...document.querySelectorAll('th:last-child, td:last-child'),
];

const columnsToClone = [
  ...document.querySelectorAll('th:nth-child(2), td:nth-child(2)'),
];

lastColumns.forEach((col, i) => {
  const columnToInsert = columnsToClone[i].cloneNode(true);

  col.before(columnToInsert);
});
