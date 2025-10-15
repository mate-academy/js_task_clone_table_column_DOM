'use strict';

const table = document.body.firstElementChild;

const sectionArray = [table.tHead, table.tBodies[0], table.tFoot];

sectionArray.filter(Boolean).forEach((section) => {
  Array.from(section.rows).forEach((row) => {
    const second = row.cells[1];
    const copy = second.cloneNode(true);

    row.insertBefore(copy, row.lastElementChild);
  });
});
