'use strict';

const header = document.querySelector('thead tr');
const footer = document.querySelector('tfoot tr');
const main = document.querySelectorAll('tbody tr');

header.children[4].before(header.children[1].cloneNode(true));
footer.children[4].before(footer.children[1].cloneNode(true));

for (const row of [...main]) {
  row.children[4].before(row.children[1].cloneNode(true));
}
