'use strict';

const rows = [...document.getElementsByTagName('tr')];

rows.forEach((row) => {
  const itemBefore = row.children[4];
  const cloneItem = row.children[1];
  const newColumn = document.createElement(`${cloneItem.tagName}`);

  cloneItem.parentNode.insertBefore(newColumn, itemBefore);

  newColumn.textContent = cloneItem.textContent;
});

// write your code here
