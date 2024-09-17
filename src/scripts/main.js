'use strict';

// write your code here
const table = {
  thead: document.querySelector('thead'),
  tbody: document.querySelector('tbody'),
  tfoot: document.querySelector('tfoot'),
};

function mainCloneFunction(tableElement) {
  const rows = tableElement.children;

  function handleRow(row) {
    const copyElement = row.children[1].cloneNode(true);

    const newRow = [...row.children].reduce((acc, col, i) => {
      return i === 4 ? [...acc, copyElement, col] : [...acc, col];
    }, []);

    row.innerHTML = '';
    newRow.forEach((col) => row.appendChild(col));

    return newRow;
  }

  for (const row of rows) {
    handleRow(row);
  }
}

mainCloneFunction(table.thead);
mainCloneFunction(table.tbody);
mainCloneFunction(table.tfoot);
