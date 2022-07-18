'use strict';

for (const row of document.querySelectorAll('tr')) {
  row.children[4].before(row.children[1].cloneNode(true));
}
