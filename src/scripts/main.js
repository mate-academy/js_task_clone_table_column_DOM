'use strict';

for (const part of document.querySelector('table').children) {
  for (const row of part.children) {
    row.children[4].before(row.children[1].cloneNode(true));
  }
}
