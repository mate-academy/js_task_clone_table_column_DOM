'use strict';

const tableRows = document.querySelectorAll('table tr');
const SECOND_COLUMN = 1;
const MIN_COLUMNS = SECOND_COLUMN + 1;

for (const tr of tableRows) {
  if (tr.children.length >= MIN_COLUMNS) {
    const newElem = tr.children[SECOND_COLUMN].cloneNode(true);

    tr.lastElementChild.insertAdjacentElement('beforebegin', newElem);
  }
}

