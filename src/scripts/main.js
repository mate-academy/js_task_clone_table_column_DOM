'use strict';

const table = document.querySelector('table');
const placedElementIndex = 1;
const separatedTableElements = [...table.children];

separatedTableElements.forEach(node => {
  const parsedNodes = [...node.children];

  if (parsedNodes.length !== 1) {
    parsedNodes.forEach(element => {
      const clonedElementBody = element
        .children[placedElementIndex].cloneNode(true);

      element.lastElementChild.before(clonedElementBody);
    });
  } else {
    const clonedRest = parsedNodes[0]
      .children[placedElementIndex].cloneNode(true);

    parsedNodes[0].lastElementChild.before(clonedRest);
  }
});
