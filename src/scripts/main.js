'use strict';

// const table = document.querySelector('table')
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tFoot = document.querySelector('tfoot');
const positionData = parseColumnData(tBody, 1);

function parseColumnData(el, column) {
  const data = [...el.rows].map(tRow => tRow.cells[column].innerText);

  return data;
};

const createTitleColumn = el => {
  const tableCol = document.createElement('th');

  tableCol.insertAdjacentText('beforeend', 'Position');

  const colAge = el.rows[0].cells[3];

  colAge.after(tableCol);
};

const createDataColumns = (el, data) => {
  for (let i = 0; i < data.length; i++) {
    const tableCol = document.createElement('td');

    tableCol.insertAdjacentText('beforeend', data[i]);

    const colAge = el.rows[i].cells[3];

    colAge.after(tableCol);
  }
};

createTitleColumn(tHead);
createTitleColumn(tFoot);
createDataColumns(tBody, positionData);
