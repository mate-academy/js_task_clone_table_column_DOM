'use strict';

const tHeaders = document.querySelectorAll('thead th');
const tBodyRows = document.querySelectorAll('tbody tr');
const tFooters = document.querySelectorAll('tfoot th');

tHeaders[4].insertAdjacentElement('beforebegin', tHeaders[1].cloneNode(true));

tBodyRows.forEach(row => {
  const newCell = row.children[1].cloneNode(true);

  row.insertBefore(newCell, row.children[4]);
});

tFooters[4].insertAdjacentElement('beforebegin', tFooters[1].cloneNode(true));
