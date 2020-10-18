'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((parentElement) => {
  const clonedElement = parentElement.children[1].cloneNode(true);

  parentElement.insertBefore(clonedElement, parentElement.children[4]);
});
