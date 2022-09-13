'use strict';

const table = document.querySelector('table');

for (const tableParts of table.children) {
  for (const child of tableParts.children) {
    child.children[3].after(child.children[1].cloneNode(true));
  }
}
