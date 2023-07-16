'use strict';

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  const columnToClone = table.rows[i].cells[1];
  const tagToCreate = document.createElement(columnToClone.tagName);

  tagToCreate.textContent = columnToClone.textContent;

  table.rows[i].cells[4].before(tagToCreate);
}
