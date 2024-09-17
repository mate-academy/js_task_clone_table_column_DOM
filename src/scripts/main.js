'use strict';

const tabl = document.querySelector('table');

const topEl = tabl.tHead.rows[0].cells[1].cloneNode(true);
const topPrev = tabl.tHead.rows[0].cells[4].cloneNode(true);
const bottomEl = tabl.tFoot.rows[0].cells[1].cloneNode(true);
const bottomPrev = tabl.tFoot.rows[0].cells[4].cloneNode(true);

for (let i = 0; i < tabl.tBodies[0].rows.length; i++) {
  const main = tabl.tBodies[0].rows[i].cells[1].cloneNode(true);
  const prev = tabl.tBodies[0].rows[i].cells[4].cloneNode(true);

  tabl.tBodies[0].rows[i].cells[4].remove();

  tabl.tBodies[0].rows[i].append(main);

  tabl.tBodies[0].rows[i].append(prev);
}

tabl.tHead.rows[0].cells[4].remove();
tabl.tHead.rows[0].append(topEl);
tabl.tHead.rows[0].append(topPrev);
tabl.tFoot.rows[0].cells[4].remove();
tabl.tFoot.rows[0].append(bottomEl);
tabl.tFoot.rows[0].append(bottomPrev);
