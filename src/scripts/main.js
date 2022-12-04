'use strict';

const currentTable = document.querySelector('table');

const copyPasteTableColumn = table => {
  const tfootTr = document.querySelector(`${table.localName} tfoot tr`);
  const theadTr = document.querySelector(`${table.localName} thead tr`);
  const tbodyTr = document.querySelectorAll(`${table.localName} tbody tr`);

  const cloneColumn = (row, cell) => {
    const content = row.children[1].innerText;
    const lastCell = row.children[4];
    const newCell = document.createElement(cell);

    newCell.innerText = content;
    lastCell.insertAdjacentElement('beforebegin', newCell).innerText = content;
  };

  cloneColumn(tfootTr, 'th');
  tbodyTr.forEach(tr => cloneColumn(tr, 'td'));
  cloneColumn(theadTr, 'th');
};

copyPasteTableColumn(currentTable);
