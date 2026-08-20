'use strict';

const allTableRowElements = [...document.querySelectorAll('tr')];

allTableRowElements.forEach((row) => {
  const childrenElements = row.children;
  const tagNameOfElements = childrenElements[0].tagName.toLowerCase();
  const newElement = document.createElement(tagNameOfElements);

  newElement.textContent = childrenElements[1].textContent;

  childrenElements[childrenElements.length - 1].before(newElement);
});
