'use strict';

const tableRows = [...document
  .querySelector('table')
  .rows,
];

for (let i = 0; i < tableRows.length; i++) {
  const cells = tableRows[i].cells;
  const cloneСell = cells[1].cloneNode(true);

  cells[3].insertAdjacentElement('afterend', cloneСell);
}
