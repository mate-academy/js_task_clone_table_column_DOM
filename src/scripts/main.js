'use strict';

// const thead = document.getElementsByTagName('thead').item(0);
// const tds = document.getElementsByTagName('td');

// const secondCellInHead = thead.querySelectorAll('th').item(1);
// const seconsdsCellsinBody = [];

// for (let i = 1; i < tds.length; i += 5) {
//   seconsdsCellsinBody.push(tds.item(i));
// }

// seconsdsCellsinTBody.forEach((cell) => console.log(cell.innerText));

const table = document.querySelector('table');

const rowHeader = table.querySelector('thead tr');
const rowsBody = table.querySelectorAll('tbody tr');
const rowFooter = table.querySelector('tfoot tr');

const rowHeaderCells = rowHeader.querySelectorAll('th');
const headerSecondCell = rowHeaderCells.item(1).cloneNode(true);

rowHeader.insertBefore(
  headerSecondCell,
  rowHeaderCells[rowHeaderCells.length - 1],
);

rowsBody.forEach((row) => {
  const rowBody = row.querySelectorAll('td');
  const bodySecondCell = rowBody.item(1).cloneNode(true);

  row.insertBefore(bodySecondCell, rowBody[rowBody.length - 1]);
});

const rowFooterCells = rowFooter.querySelectorAll('th');
const footerSecondCell = rowFooterCells.item(1).cloneNode(true);

rowFooter.insertBefore(
  footerSecondCell,
  rowFooterCells[rowFooterCells.length - 1],
);
