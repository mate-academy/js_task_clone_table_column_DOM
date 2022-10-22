'use strict';

const table = document.body.querySelector('table');

for (const el of [...table.children]) {
  const rows = el.children;

  for (const row of rows) {
    const secondColumnElement = row.children[1];
    const elementBeforeInsert = row.children[row.children.length - 1];

    row.insertBefore(secondColumnElement.cloneNode(true), elementBeforeInsert);
  }
}
