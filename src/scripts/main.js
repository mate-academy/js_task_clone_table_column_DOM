'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(({ children }) => {
  const elementToCopy = children[1];
  const indexToInsert = children.length - 1;

  children[indexToInsert].before(elementToCopy.cloneNode(true));
});
