'use strict';

// write your code here
'use strict';

'use strict';

(function () {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  function cloneColumnBeforeLast(section, columnIndex) {
    if (!section) {
      return;
    }

    const rows = Array.from(section.querySelectorAll('tr'));

    for (const row of rows) {
      const cells = Array.from(row.children);

      if (cells.length <= columnIndex) {
        continue;
      }

      const sourceCell = cells[columnIndex];
      const lastCell = cells[cells.length - 1];

      if (!sourceCell || !lastCell) {
        continue;
      }

      const cloned = sourceCell.cloneNode(true);

      row.insertBefore(cloned, lastCell);
    }
  }

  // Learning step (as suggested in task):
  // Idea: clone column index 0 and append it to the end of each row
  // (then revert and implement the final requirement).

  cloneColumnBeforeLast(table.tHead, 1);
  cloneColumnBeforeLast(table.tBodies[0], 1);
  cloneColumnBeforeLast(table.tFoot, 1);
})();
