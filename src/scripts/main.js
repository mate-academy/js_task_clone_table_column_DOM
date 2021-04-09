'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  row.insertBefore(row.children[1].cloneNode(true), row.lastElementChild);
});
