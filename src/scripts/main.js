'use strict';

const allRows = document.querySelectorAll('tr');

allRows.forEach(row => {
  row.children[4].before(row.children[1].cloneNode(true));
});
