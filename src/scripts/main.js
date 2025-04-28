'use strict';

const trList = [...document.querySelectorAll('tr')];

trList.forEach((tr) => {
  if (tr.cells[1] && tr.cells[tr.children.length - 2]) {
    const copy = tr.cells[1].cloneNode(true);

    tr.cells[tr.children.length - 2].insertAdjacentElement('afterend', copy);
  }
});

// const table = document.querySelector('table');
// const tableHeadRow = table.querySelector('thead tr');
// const tableBodyRow = table.querySelectorAll('tbody tr');
// const tableFootRow = table.querySelector('tfoot tr');

// const newHeadRow = tableHeadRow.children[1].cloneNode(true);
// const newFootRow = tableFootRow.children[1].cloneNode(true);

// tableHeadRow.lastElementChild.before(newHeadRow);
// tableFootRow.lastElementChild.before(newFootRow);

// for (const row of tableBodyRow) {
//   const newbodyRow = row.children[1].cloneNode(true);

//   row.lastElementChild.before(newbodyRow);
// }
