'use strict';

const [...rows] = document.querySelectorAll('tr');

for (const row of rows) {
  const element = row.children[1];

  row.children[row.childElementCount - 2].after(element.cloneNode(true));
}
