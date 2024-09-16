'use strict';

[...document.querySelector('table').rows].forEach(row => {
  const position = row.cells[1];
  const salary = row.cells[4];
  const positionCopy = position.cloneNode(true);

  row.insertBefore(positionCopy, salary);
});
