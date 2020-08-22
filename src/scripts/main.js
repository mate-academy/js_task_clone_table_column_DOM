'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  row.lastElementChild.before(row.children[1].cloneNode(true));
});
