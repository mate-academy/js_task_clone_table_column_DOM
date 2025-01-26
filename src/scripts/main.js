'use strict';

function cloneColumn(selector, enterPosition, clonedPosition) {
  const table = document.querySelector(`${selector}`);

  for (const el of table.children) {
    const allLines = el.querySelectorAll('tr');

    if (allLines.length > 0) {
      for (const elem of allLines) {
        const newClone = elem.children[enterPosition].cloneNode(true);

        elem.children[clonedPosition - 1].after(newClone);
      }
    }
  }
}

cloneColumn('table', 1, 4);
