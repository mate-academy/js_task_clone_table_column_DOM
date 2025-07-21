'use strict';

// write your code here
'use strict';

const table = document.querySelector('table');

['thead', 'tbody', 'tfoot'].forEach((sectionName) => {
  const section = table.querySelector(sectionName);

  // eslint-disable-next-line curly
  if (!section) return;

  [...section.rows].forEach((row) => {
    const secondCell = row.cells[1];
    const clonedCell = secondCell.cloneNode(true);

    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  });
});
