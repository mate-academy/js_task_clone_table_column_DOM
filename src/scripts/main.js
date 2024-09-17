'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const colonnedColumn = rows[i].children[1].cloneNode(true);

  rows[i].lastElementChild.before(colonnedColumn);
}
