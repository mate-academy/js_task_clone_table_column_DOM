'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(row => {
  const tableDataCopy = row.children[1].cloneNode(true);
  const rowCopy = [...row.children];

  rowCopy.splice(4, 0, tableDataCopy);
  row.append(...rowCopy);
});
