'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach(row => {
  row.lastElementChild.before(row.children[1].cloneNode(true));
});
