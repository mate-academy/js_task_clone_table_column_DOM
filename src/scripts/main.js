'use strict';

const employees = document.getElementsByTagName('tr');

for (let i = 0; i < employees.length; i++) {
  const collectionTr = document.getElementsByTagName('tr')[i];

  const positionColumn = collectionTr.children[1];

  const positionColumnCopy = positionColumn.cloneNode(true);

  collectionTr.insertBefore(positionColumnCopy, collectionTr.children[4]);
}
