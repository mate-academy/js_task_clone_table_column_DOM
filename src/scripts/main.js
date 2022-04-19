'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const copyElement = row.children[1].cloneNode(true);

  row.children[4].insertAdjacentElement('beforebegin', copyElement);
});
