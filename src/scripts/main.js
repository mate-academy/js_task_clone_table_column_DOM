'use strict';

const theadElement = document.querySelector('thead');
const tbodyElement = document.querySelector('tbody');
const tfootElement = document.querySelector('tfoot');

function cloneNameOfColumn(element, row, clonedCell, cloneToCell) {
  const cloneOfElement = element.rows[row].cells[clonedCell].cloneNode(true);

  element.rows[row].cells[cloneToCell].before(cloneOfElement);
}

function cloneRow(element, clonedCell, cloneToCell) {
  const trElement = [...element.rows];

  for (let i = 0; i < trElement.length; i++) {
    const rowElement = trElement[i].cells[clonedCell].cloneNode(true);

    trElement[i].cells[cloneToCell].before(rowElement);
  }
}

cloneNameOfColumn(theadElement, 0, 1, 4);
cloneNameOfColumn(tfootElement, 0, 1, 4);
cloneRow(tbodyElement, 1, 4);
