'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const columns = row.querySelectorAll('th , td');
  const secondColumnClone = columns[1].cloneNode(true);

  columns[columns.length - 1].before(secondColumnClone);
});
