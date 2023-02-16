'use strict';

const tableRows = document.querySelectorAll('tr');

for (const element of tableRows) {
  const newNode = element.children[1].cloneNode(true);

  element.insertBefore(newNode, element.children[4]);
}
