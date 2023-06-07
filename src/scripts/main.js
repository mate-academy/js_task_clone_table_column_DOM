'use strict';

const getColumnTable = document.querySelectorAll('tr');

getColumnTable.forEach(item => {
  const cloneNode = item.children[1];

  const lastColumn = item.children[4];

  item.insertBefore(cloneNode.cloneNode(true), lastColumn);
});
