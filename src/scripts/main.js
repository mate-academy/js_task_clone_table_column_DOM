'use strict';

const tr = [...document.querySelectorAll('tr')];
let i = 0;

for (const child of tr) {
  const content = child.children[1].innerHTML;
  let newCell;

  if (i === 0 || i === tr.length - 1) {
    newCell = document.createElement('th');
  } else {
    newCell = document.createElement('td');
  }

  newCell.textContent = content;
  child.appendChild(newCell);

  i++;
}

tr.forEach((el) => {
  const cells = el.cells;
  const colIndex1 = 4;
  const colIndex2 = 5;

  if (colIndex1 < cells.length && colIndex2 < cells.length) {
    const temp = cells[colIndex1].innerHTML;

    cells[colIndex1].innerHTML = cells[colIndex2].innerHTML;
    cells[colIndex2].innerHTML = temp;
  }
});
