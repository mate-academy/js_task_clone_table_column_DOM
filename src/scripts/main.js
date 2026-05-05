'use strict';

const table = document.querySelector('table');

// function to process rows (thead, tbody, tfoot)
function cloneColumn(section) {
  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    // clone second column (index 1)
    const clonedCell = cells[1].cloneNode(true);

    // insert before last column
    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
}

// apply to all table sections
['thead', 'tbody', 'tfoot'].forEach((tag) => {
  const section = table.querySelector(tag);

  if (section) {
    cloneColumn(section);
  }
});
