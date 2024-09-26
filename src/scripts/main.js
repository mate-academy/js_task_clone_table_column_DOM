'use strict';

const rows = [...document.body.querySelector('table').rows];

rows.forEach(row => {
  row.children[3].after(row.children[1].cloneNode(true));
});
