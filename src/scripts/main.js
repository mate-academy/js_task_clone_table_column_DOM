'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(tableRow => {
  const positionOut = 1;
  const positionIn = tableRow.children.length - 1;

  addElement(tableRow, positionOut, positionIn);
});

function addElement(elements, posOut, posIn) {
  const element = elements.children[posOut];

  elements.children[posIn].before(element.cloneNode(true));
}
