'use strict';

// write your code here
const rows = document.getElementsByTagName('tbody')[0].querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const tds = rows[i].querySelectorAll('td');

  const last = tds.item(tds.length - 1);

  const additional = tds[1].cloneNode(true);

  last.insertAdjacentElement('beforebegin', additional);
}
