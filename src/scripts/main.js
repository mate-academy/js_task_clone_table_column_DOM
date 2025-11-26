'use strict';

// write your code here
const rows = document.querySelectorAll('tbody tr');
const thead = document.querySelectorAll('thead tr, tfoot tr');

thead.forEach(thead => {
  const th = thead.querySelectorAll('th')[1];
  const clone = th.cloneNode(true);
  const th4 = thead.querySelectorAll('th')[3];
  th4.insertAdjacentElement('afterEnd', clone);
})

rows.forEach(row => {
  const td = row.querySelectorAll('td')[1];
  const clone = td.cloneNode(true);
  const td4 = row.querySelectorAll('td')[3];
  td4.insertAdjacentElement('afterEnd', clone);
})
