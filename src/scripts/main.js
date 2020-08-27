'use strict';

const tRows = [...document.querySelectorAll('tr')];

for (const row of tRows) {
  const copyRow = row.children[1].cloneNode(true);

  row.children[3].after(copyRow);
}
