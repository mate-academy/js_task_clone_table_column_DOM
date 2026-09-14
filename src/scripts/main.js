'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const columns = row.children;

  if (columns.length >= 2) {
    const clonedColumn = columns[1].cloneNode(true);
    const pastedColumn = columns[columns.length - 2];

    pastedColumn.after(clonedColumn);
  }
});
