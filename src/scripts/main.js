'use strict';

(function() {
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => {
    row.insertBefore(row.cells[1].cloneNode(true), row.lastElementChild);
  });
}());
