'use strict';

const rows = [...document.querySelectorAll('tr')];

for (const row of rows) {
  const clone = row.children[1].cloneNode(true);

  row.lastElementChild.before(clone);
}
