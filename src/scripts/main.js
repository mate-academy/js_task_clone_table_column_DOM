'use strict';

function cloneRows() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  for (const tr of table.rows) {
    const row = tr.cells;
    const needTr = row[1];

    if (!needTr) {
      continue;
    }

    const clone = needTr.cloneNode(true);

    if (tr.children.length === 0) {
      tr.append(clone);
      continue;
    }

    const elementAfter = tr.children[tr.children.length - 1];

    elementAfter.before(clone);
  }
}

cloneRows();
