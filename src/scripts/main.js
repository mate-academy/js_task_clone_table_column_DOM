'use strict';

const tableChildren = [...document.querySelector('table').children];

tableChildren.forEach(rows => {
  const rowsChildren = [...rows.children];

  rowsChildren.forEach(row => {
    row.insertBefore(row.children[1].cloneNode(true), row.children[4]);
  });
});
