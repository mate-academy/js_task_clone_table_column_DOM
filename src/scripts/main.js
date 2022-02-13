'use strict';

let node;
const trs = document.querySelectorAll('tr');

for (const tr of trs) {
  node = tr.childNodes[3];

  const clone = node.cloneNode(true);
  const lastCh = tr.childNodes[7];

  lastCh.insertAdjacentElement('afterend', clone);
}
