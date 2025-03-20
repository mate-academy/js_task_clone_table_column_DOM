'use strict';

function copyPastColumnTable(indexCellCopy, indexCellPast) {
  const sections = [
    document.querySelector('thead'),
    document.querySelector('tbody'),
    document.querySelector('tfoot'),
  ];

  sections.forEach((x) => {
    for (const row of x.rows) {
      const copyElem = row.cells[indexCellCopy].cloneNode(true);

      row.cells[
        indexCellPast < 0 ? row.cells.length + indexCellPast : indexCellPast
      ].before(copyElem);
    }
  });
}

copyPastColumnTable(1, -1);
