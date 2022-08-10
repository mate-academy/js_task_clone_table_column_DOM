'use strict';

const header = document.querySelector('thead');
const trHeader = header.firstElementChild;
const itemHeader = header.rows[0].cells[1];
const cloneItemHeader = itemHeader.cloneNode(true);

trHeader.insertBefore(cloneItemHeader, trHeader.children[4]);

const footer = document.querySelector('tfoot');
const trFooter = footer.firstElementChild;
const itemFooter = footer.rows[0].cells[1];
const cloneItemFooter = itemFooter.cloneNode(true);

trFooter.insertBefore(cloneItemFooter, trFooter.children[4]);

const body = document.querySelector('tbody');

for (let i = 0; i < body.rows.length; i++) {
  const row = body.rows[i].cells[1];
  const cell = row.cloneNode(true);

  body.rows[i].insertBefore(cell, body.rows[i].children[4]);
}
