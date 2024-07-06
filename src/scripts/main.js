'use strict';

const head = document.querySelector('thead tr');
const body = document.querySelectorAll('tbody tr');
const food = document.querySelector('tfoot tr');

const cloneCellHead = head.cells[1].cloneNode(true);
const cloneCellFood = food.cells[1].cloneNode(true);

head.cells[4].insertAdjacentElement('beforebegin', cloneCellHead);

food.cells[4].insertAdjacentElement('beforebegin', cloneCellFood);

for (let i = 0; i < body.length; i++) {
  const cellsBody = body[i].cells[1];
  const cloneCellBody = cellsBody.cloneNode(true);

  body[i].cells[4].insertAdjacentElement('beforebegin', cloneCellBody);
}
