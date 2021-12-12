'use strict';

const foundTr = document.querySelectorAll('tr');

const columns = [...foundTr];

columns.forEach(column => {
  const secondColumn = column.children[1];
  const fourthColumn = column.children[3];
  const cloneSecondColumn = secondColumn.cloneNode(true);

  fourthColumn.after(cloneSecondColumn);
});
