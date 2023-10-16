'use strict';

const rows = document.body.firstElementChild.rows;

for (let i = 0; i < rows.length; i++) {
  rows[i].lastElementChild.before(rows[i].children[1].cloneNode(true));
}
