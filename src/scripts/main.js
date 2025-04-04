'use strict';

const trs = document.querySelectorAll('tr');

for (let i = 0; i < trs.length; i++) {
  const columnToCopy = trs[i].children[1].cloneNode(true);
  trs[i].children[3].after(columnToCopy);
}
