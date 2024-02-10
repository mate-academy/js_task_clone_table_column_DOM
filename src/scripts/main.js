'use strict';

const table = document.querySelectorAll('tr');

table.forEach(element => {
  const newTh = document.createElement(element.children[1].nodeName);

  newTh.textContent = element.children[1].textContent;

  element.children[3].insertAdjacentElement('afterend', newTh);
});
