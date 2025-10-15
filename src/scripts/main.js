'use strict';

const table = document.querySelector('table');

const tBodies = [...table.tBodies];

const sectionArray = [table.tHead, ...tBodies, table.tFoot];

sectionArray.filter(Boolean).forEach((section) => {
  Array.from(section.rows).forEach((row) => {
    if (row.cells[1]) {
      const second = row.cells[1];
      const copy = second.cloneNode(true);

      row.insertBefore(copy, row.lastElementChild);
    }
  });
});
