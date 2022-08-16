'use strict';

const trElements = document.querySelectorAll('tr');

trElements.forEach((column) => {
  const columnCopy = column.children[1].cloneNode(true);

  return column.insertBefore(columnCopy, column.children[4]);
});
