/* eslint-disable no-console */
'use strict';

import { getColumn } from './helpers.js';

const table = document.querySelector('table');

function changeColumsData(dashboard, fromColumnIndex, toColumnIndex) {
  const columnFrom = getColumn(dashboard, fromColumnIndex);
  const columnTo = getColumn(dashboard, toColumnIndex);

  columnTo.forEach((cell, index) => {
    cell.after(columnFrom[index].cloneNode(true));
  });
}

changeColumsData(table, 1, 3);
