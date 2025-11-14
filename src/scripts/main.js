'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const elements = row.children;
  const clonedElements = elements[1].cloneNode(true);
  const lastElement = elements[elements.length - 1];

  lastElement.before(clonedElements);
});
