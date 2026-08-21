'use strict';

const trList = document.querySelectorAll('tr');

function replaceColumn(list) {
  list.forEach((element) => {
    const td = element.cells[1];
    const tdLast = element.cells[element.cells.length - 1];
    const clone = td.cloneNode(true);

    tdLast.before(clone);
  });
}

replaceColumn(trList);
