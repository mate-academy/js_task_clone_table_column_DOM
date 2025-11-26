'use strict';

// write your code here
const rows = document.querySelectorAll('tbody tr');
const thead = document.querySelectorAll('thead tr, tfoot tr');

thead.forEach((theader) => {
  const th = theader.querySelectorAll('th')[1];
  const clone = th.cloneNode(true);
  const th4 = theader.querySelectorAll('th')[4];

  th4.insertAdjacentElement('beforeBegin', clone);
});

rows.forEach((row) => {
  const td = row.querySelectorAll('td')[1];
  const clone = td.cloneNode(true);
  const td4 = row.querySelectorAll('td')[4];

  td4.insertAdjacentElement('beforeBegin', clone);
});
