'use strict';

const table = [...document.querySelector('table').rows];

for (const key of table) {
  const el = key.cells[1].cloneNode(true);

  key.cells[3].after(el);
}
