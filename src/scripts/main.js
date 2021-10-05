'use strict';

const tr = document.querySelectorAll('tr');

const colums = [...tr];

colums.forEach(column => {
  const secondColumn = column.children[1];
  const fourthColumn = column.children[3];
  const cloneSecondColumn = secondColumn.cloneNode(true);

  fourthColumn.after(cloneSecondColumn);
});
