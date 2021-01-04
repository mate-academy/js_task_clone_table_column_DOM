'use strict';

function utilize(a, b) {
  return `${a} ${b}`;
}

const tableHead = document.querySelector('thead');

const tableHeadRow = tableHead.children[0];
const theadToPastElement = tableHeadRow.children[1];
const tableFoot = document.querySelector('tfoot');
const tableFootRow = tableFoot.children[0];
const tfootToPastElement = tableFootRow.children[1];

const pastingElementFoot
= tableFootRow.insertBefore(
  tfootToPastElement.cloneNode(true),
  tableFootRow.children[4]
);
const pastingElementHead
= tableHeadRow.insertBefore(
  theadToPastElement.cloneNode(true),
  tableHeadRow.children[4]
);

utilize(pastingElementFoot, pastingElementHead);

const tbodyRows = [...document.querySelector('tbody').children];

for (const row of tbodyRows) {
  const pastingElement
  = row.insertBefore(
    row.children[1].cloneNode(true),
    row.children[4]
  );

  utilize(pastingElement);
}
