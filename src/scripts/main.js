'use strict';

const table = document
  .querySelector('table');

const rows = [
  ...table
    .rows];

const column = rows
  .map(row =>
    row
      .cells[1]
      .cloneNode(true));

rows
  .map((row, index) =>
    row
      .cells[4]
      .before(column[index]));
