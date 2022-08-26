'use strict';

function createCopy(toColumn, fromColumn) {
  return document.querySelectorAll('tr')
    .forEach(element => element.children[toColumn - 1]
      .before(element.children[fromColumn - 1].cloneNode(true)));
}

createCopy(5, 2);
