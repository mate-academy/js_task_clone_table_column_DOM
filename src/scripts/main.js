'use strict';

const tableRows = [...document.querySelectorAll('tr')];

for (const row of tableRows) {
  row.insertBefore(
    row.children[1].cloneNode(true), row.lastElementChild
  );
}
