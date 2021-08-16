'use strict';

for (const tr of document.querySelectorAll('tr')) {
  tr.lastElementChild.before(tr.cells[1].cloneNode(true));
}
