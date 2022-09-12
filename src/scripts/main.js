'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const foot = document.querySelector('tfoot');

const copyColumns = (collection) => {
  const rows = [...collection.rows];

  for (const row of rows) {
    const rowClone = row.children[1].cloneNode(true);

    row.children[4].before(rowClone);
  }
};

copyColumns(head);
copyColumns(body);
copyColumns(foot);
