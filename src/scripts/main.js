'use strict';

const rows = [...document.querySelectorAll('tbody tr')];

const selectedCells = rows.map((row) => row.cells[1].textContent);

const columnName = [...document.querySelectorAll('thead th')][1].textContent;

function insertNewColumn(headerData, bodyData) {
  const oldTable = document.querySelector('table');
  const newTable = oldTable.cloneNode(true);

  oldTable.remove();

  const newTableHeaderRow = newTable.querySelector('thead tr');
  const newTableBodyRows = [...newTable.querySelectorAll('tbody tr')];
  const newTableFooterRow = newTable.querySelector('tfoot tr');

  const newHeaderCell = document.createElement('th');

  newHeaderCell.textContent = headerData;

  newTableHeaderRow.insertBefore(
    newHeaderCell,
    newTableHeaderRow.lastElementChild,
  );

  bodyData.forEach((data, index) => {
    const newBodyCell = document.createElement('td');

    newBodyCell.textContent = data;

    const lastCell = newTableBodyRows[index].lastElementChild;

    newTableBodyRows[index].insertBefore(newBodyCell, lastCell);
  });

  const newFooterCell = document.createElement('th');

  newFooterCell.textContent = headerData;

  newTableFooterRow.insertBefore(
    newFooterCell,
    newTableFooterRow.lastElementChild,
  );

  document.body.appendChild(newTable);
}

insertNewColumn(columnName, selectedCells);
