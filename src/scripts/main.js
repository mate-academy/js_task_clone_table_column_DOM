'use strict';

const tableRow = document.querySelectorAll('tr');

tableRow.forEach(row => {
  const cloneElement = row
    .firstElementChild
    .nextElementSibling
    .cloneNode(true);

  row.children[4].insertAdjacentElement('beforeBegin', cloneElement);
});
