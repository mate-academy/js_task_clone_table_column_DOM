'use strict';

const rowList = document.querySelectorAll('tr');

for (let i = 0; i < rowList.length; i++) {
  const row = rowList[i];
  const copy = row.children[1].cloneNode(true);

  row.children[4].before(copy);
}
