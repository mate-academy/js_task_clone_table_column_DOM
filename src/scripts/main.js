'use strict';

const rows = document.querySelectorAll('tr');

[ ...rows ].forEach(row =>
  row.children[4].before(row.children[1].cloneNode(true)));
