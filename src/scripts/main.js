'use strict';

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');
const secondTh = headerRow.children[1];
const targetIndexHead = headerRow.children[4] ? 4 : headerRow.children.length;

headerRow.insertBefore(
  secondTh.cloneNode(true),
  headerRow.children[targetIndexHead],
);

const tbodyRows = table.querySelector('tbody').rows;

for (const tr of tbodyRows) {
  const secondTd = tr.children[1];
  const targetIndexTd = tr.children[4] ? 4 : tr.children.length;

  tr.insertBefore(secondTd.cloneNode(true), tr.children[targetIndexTd]);
}

const tfootRow = table.querySelector('tfoot tr');

if (tfootRow) {
  const secondTdFoot = tfootRow.children[1];
  const targetIndexFoot = tfootRow.children[4] ? 4 : tfootRow.children.length;

  tfootRow.insertBefore(
    secondTdFoot.cloneNode(true),
    tfootRow.children[targetIndexFoot],
  );
}
