'use strict';

const trs = document.querySelectorAll('tr');

for (const tr of trs) {
  const bubble = tr.children[1].cloneNode(true);

  tr.lastElementChild.before(bubble);
}
