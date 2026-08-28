'use strict';

// const table = document.querySelector('table');
// const tableHead = document.querySelector('thead');
// const tableFoot = document.querySelector('tfoot');
const tableElements = document.querySelectorAll('tr');

// console.log(tableElements);
// console.log(table);
// const salary = tableHead.lastChild;

// console.log(salary);

function addColumn() {
  for (const row of tableElements) {
    // console.log(row.children[1]);

    const copy = row.children[1].cloneNode(true);

    row.insertBefore(copy, row.lastElementChild);
  }
}

addColumn();
