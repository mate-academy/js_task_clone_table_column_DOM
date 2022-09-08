'use strict';

const bodyTable = document.querySelector('tbody');
const bodyHead = document.querySelector('thead');
const bodyFloot = document.querySelector('tfoot');

const createCopyColumns = function(collection) {
  const rowsCollection = collection.rows;
  const arrayFrom = [...rowsCollection];

  for (const row of arrayFrom) {
    const column = row.children[1].cloneNode(true);

    row.children[4].before(column);
  }
};

createCopyColumns(bodyTable);
createCopyColumns(bodyHead);
createCopyColumns(bodyFloot);
