'use strict';

// write your code here

const tr = document.querySelectorAll('tr');

tr.forEach((el) => {
  const columns = el.children;
  const columnSecond = columns[1];
  const columnCopy = columnSecond.cloneNode(true);

  el.insertBefore(columnCopy, columns[columns.length - 1]);
});
