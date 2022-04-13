'use strict';

function duplicateColumn(table, to, from) {
  peopleTable.querySelectorAll('tr')
    .forEach(tr => {
      const boxes = tr.children;
      const copy = boxes[from].cloneNode(true);

      boxes[to].insertAdjacentElement('beforebegin', copy);
    })
}

const peopleTable = document.querySelector('table');

duplicateColumn(peopleTable, 4, 1);
