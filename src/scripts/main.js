'use strict';

const table = document.querySelector('table');

const headTr = document.querySelector('thead tr');
const secondTh = headTr.children[1];
const lastHeadTh = headTr.lastElementChild;
const newTh = secondTh.cloneNode(true);

headTr.insertBefore(newTh, lastHeadTh);

const footTr = document.querySelector('tfoot tr');
const lastFootTh = footTr.lastElementChild;
const newTh2 = secondTh.cloneNode(true);

footTr.insertBefore(newTh2, lastFootTh);

appendingClonedColumn(table);

function appendingClonedColumn(tableParam) {
  [...tableParam.tBodies].forEach((tBody) => {
    [...tBody.rows].forEach((row) => {
      const clone = row.children[1].cloneNode(true);

      row.insertBefore(clone, row.lastElementChild);
    });
  });
}
