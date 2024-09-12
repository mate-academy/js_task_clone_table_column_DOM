'use strict';

const allTabRows = document.querySelectorAll('tr');

allTabRows.forEach(tr => {
  const rowToCopy = tr.children[1].cloneNode(true);

  tr.insertBefore(rowToCopy, tr.children[4]);
});
