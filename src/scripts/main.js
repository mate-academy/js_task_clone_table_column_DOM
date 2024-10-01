'use strict';

// write your code here
const tableTr = document.querySelectorAll('tr');

for (let i = 0; i < tableTr.length; i++) {
  const tr = tableTr[i];

  for (let j = 1; j < 2; j++) {
    const trClone = tr.cells[j].cloneNode(true);

    tr.insertBefore(trClone, tr.lastElementChild);
  }
}
