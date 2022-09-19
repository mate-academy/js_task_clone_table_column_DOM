'use strict';

const rows = [...document.querySelector('table').rows];

rows.forEach(row => (
  row.children[4].before(row.children[1].cloneNode(true))
));
