'use strict';

const positionRow = document.querySelectorAll('tr');

const positions = [...positionRow].map(row => row.cells[1]);
const finalCopy = [...positions];

finalCopy.map((el, index) =>
  positionRow[index].cells[3].insertAdjacentHTML('afterend', el.outerHTML));
