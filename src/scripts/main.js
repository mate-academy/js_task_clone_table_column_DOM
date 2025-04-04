'use strict';

const tHead = document.querySelector('thead');
const tFoot = document.querySelector('tfoot');
const tBody = document.querySelector('tbody');

function cloneHeadAndFoot(row) {
  const main = row.rows[0].cells;

  for (let i = 0; i < main.length; i++) {
    if (main[i].innerHTML === row.rows[0].cells[3].innerHTML) {
      const newPosition = row.rows[0].cells[1].cloneNode(true);

      main[i].after(newPosition);
    }
  }
}

cloneHeadAndFoot(tHead);
cloneHeadAndFoot(tFoot);

for (let i = 0; i < tBody.rows.length; i++) {
  if (tBody.rows[i].cells[1].innerHTML) {
    const newPosition = tBody.rows[i].cells[1].cloneNode(true);

    tBody.rows[i].cells[3].after(newPosition);
  }
}
