'use strict';

// write your code here
const tableRows = document.querySelectorAll('tr');

tableRows.forEach(({ cells }) => {
  const cellToCopy = cells[1];

  const insertAfterIndex = 3;

  cells[insertAfterIndex].after(cellToCopy.cloneNode(true));
});
