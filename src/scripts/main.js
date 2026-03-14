'use strict';

const table = document.querySelector('table');

const sections = ['thead', 'tbody', 'tfoot'];

sections.forEach((sectionName) => {
  const section = table.querySelector(sectionName);

  if (!section) {
    return;
  }

  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    if (cells.length < 2) {
      return;
    }

    const clone = cells[1].cloneNode(true);

    row.insertBefore(clone, cells[cells.length - 1]);
  });
});
