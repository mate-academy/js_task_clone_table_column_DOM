'use strict';

const rows = [...document.querySelectorAll('tr')];

for (const row of rows) {
  const position = row.children[1];
  const clone = position.cloneNode(true);

  row.lastElementChild.before(clone);
}
