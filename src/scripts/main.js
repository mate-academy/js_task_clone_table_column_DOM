'use strict';

function removeIdFromElement(element) {
  if (element.id) {
    element.removeAttribute('id');
  }

  const childrenWithId = element.querySelectorAll('[id]');

  childrenWithId.forEach((child) => child.removeAttribute('id'));
}

function cloneSecondColumn(row) {
  const cells = row.cells;

  if (cells.length < 2) {
    return;
  }

  const secondCell = cells[1];
  const clonedCell = secondCell.cloneNode(true);

  removeIdFromElement(clonedCell);

  const lastCell = cells[cells.length - 1];

  lastCell.parentNode.insertBefore(clonedCell, lastCell);
}

const table = document.querySelector('table');

if (table) {
  const thead = table.querySelector('thead');

  if (thead) {
    const theadRows = thead.querySelectorAll('tr');

    theadRows.forEach((row) => cloneSecondColumn(row));
  }

  const tbody = table.querySelector('tbody');

  if (tbody) {
    const tbodyRows = tbody.querySelectorAll('tr');

    tbodyRows.forEach((row) => cloneSecondColumn(row));
  }

  const tfoot = table.querySelector('tfoot');

  if (tfoot) {
    const tfootRows = tfoot.querySelectorAll('tr');

    tfootRows.forEach((row) => cloneSecondColumn(row));
  }
}
