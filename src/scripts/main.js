'use strict';

const table = document.querySelector('table');
const placedElementIndex = 1;
const specifiedLocationIndex = 3;
const separatedTableElements = [...table.children];

separatedTableElements.forEach(node => {
  const parsedNodes = [...node.children];

  parsedNodes.forEach(element => {
    const clonedElement = element
      .children[placedElementIndex].cloneNode(true);

    element.children[specifiedLocationIndex].after(clonedElement);
  });
});
