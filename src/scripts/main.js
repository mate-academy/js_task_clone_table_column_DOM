'use strict';

const table = document.querySelector('table');

const sections = ['thead', 'tbody', 'tfoot'];

sections.forEach((section) => {
  const rows = table.querySelectorAll(`${section} tr`);

  rows.forEach((row) => {
    const clonedCell = row.children[1].cloneNode(true);

    row.insertBefore(clonedCell, row.lastElementChild);
  });
});
