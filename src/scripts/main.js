'use strict';

const data = document.querySelectorAll('tr');

for (const element of data) {
  const newNode = element.children[1].cloneNode(true);

  element.insertBefore(newNode, element.children[4]);
}
