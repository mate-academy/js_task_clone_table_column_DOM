'use strict';

function rowClonning() {
  const sections = document.querySelector('table').children;

  for (const section of sections) {
    const rows = section.children;

    for (const row of rows) {
      const clonedCell =
        row.firstElementChild.nextElementSibling.cloneNode(true);

      if (row.firstElementChild.tagName === 'TH') {
        const newTh = clonedCell;

        row.lastElementChild.before(newTh);
      } else {
        const newTd = clonedCell;

        row.lastElementChild.before(newTd);
      }
    }
  }
}

rowClonning();
