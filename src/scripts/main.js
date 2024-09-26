'use strict';

const tableRows = document.querySelectorAll('tr');

for (const tr of tableRows) {
  const copiedColumnElement = tr.children[1].cloneNode(true);
  const lastElement = tr.lastElementChild;

  lastElement.before(copiedColumnElement);
}
