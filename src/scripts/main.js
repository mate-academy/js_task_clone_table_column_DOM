'use strict';

const tablesRow = document.querySelectorAll('tr');

tablesRow.forEach((table) => {
  const firstTableElement =
    table.firstElementChild.nextElementSibling.cloneNode(true);

  table.lastElementChild.before(firstTableElement);
});
