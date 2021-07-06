'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  row.insertBefore(
    row.children[1].cloneNode(true), row.children[4]
  );
}
