'use strict';

const table = document.querySelector('table');

const thead = table.querySelector('thead tr');
const tbody = table.querySelectorAll('tbody tr');
const tfoot = table.querySelector('tfoot tr');
const th = thead.querySelectorAll('th')[1].cloneNode(true);

thead.insertBefore(th, thead.querySelector('th:last-child'));

tbody.forEach((row) => {
  const td = row.querySelectorAll('td')[1].cloneNode(true);

  row.insertBefore(td, row.querySelector('td:last-child'));
});

if (tfoot) {
  const tf = tfoot.querySelectorAll('th')[1].cloneNode(true);

  tfoot.insertBefore(tf, tfoot.querySelector('th:last-child'));
}
