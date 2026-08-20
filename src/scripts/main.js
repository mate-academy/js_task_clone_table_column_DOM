'use strict';

const allTableRowElements = [...document.querySelectorAll('tr')];

allTableRowElements.forEach((row) => {
  const childrenElements = row.children;
  const clonedElement = childrenElements[1].cloneNode(true);

  childrenElements[childrenElements.length - 1].before(clonedElement);
});
