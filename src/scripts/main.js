'use strict';

const allTr = [...document.querySelectorAll('tr')];

for (const key of allTr) {
  const element = key.cells[1].cloneNode(true);

  key.cells[2].after(element);
}
