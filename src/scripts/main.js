'use strict';

// write your code here
const allRows = Array.from(document.querySelectorAll('tr'));

for (const row of allRows) {
  const rowArray = Array.from(row.children);
  const cellCopy = rowArray[1].cloneNode(true);

  row.insertBefore(cellCopy, rowArray[rowArray.length - 1]);
}
