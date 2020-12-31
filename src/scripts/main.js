'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const trsOfTbody = [...tbody.querySelectorAll('tr')];
const tfoot = document.querySelector('tfoot');

thead.querySelector('tr')
  .insertBefore(thead
    .querySelector('tr')
    .children[1]
    .cloneNode(true),
  thead
    .querySelector('tr')
    .children[4]);

for (const tr of trsOfTbody) {
  tr.insertBefore(tr
    .children[1]
    .cloneNode(true),
  tr.children[4]);
}

tfoot.querySelector('tr')
  .insertBefore(tfoot
    .querySelector('tr')
    .children[1]
    .cloneNode(true),
  tfoot
    .querySelector('tr')
    .children[4]);
