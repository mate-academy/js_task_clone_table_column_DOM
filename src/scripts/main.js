'use strict';

const cloneRows = document.querySelectorAll('table tr');

for (let i = 0; i < cloneRows.length; i++) {
  cloneRows[i].children[4].before(cloneRows[i].children[1].cloneNode(true));
}
