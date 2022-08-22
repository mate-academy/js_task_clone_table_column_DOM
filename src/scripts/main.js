'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

function columnAdder(param) {
  for (const char of param.rows) {
    if (param !== tbody) {
      const th = document.createElement('th');

      th.textContent = char.cells[1].innerHTML;
      char.children[4].before(th);
    } else {
      const td = document.createElement('td');

      td.textContent = char.cells[1].innerHTML;
      char.children[4].before(td);
    }
  }
}

columnAdder(tbody);
columnAdder(tfoot);
columnAdder(thead);
