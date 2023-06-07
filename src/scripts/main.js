'use strict';

const getColumnTable = document.querySelectorAll('tr');

getColumnTable.forEach(item => {
  const cloneNode = item.children[1];

  item.append(cloneNode.cloneNode(true));
});
