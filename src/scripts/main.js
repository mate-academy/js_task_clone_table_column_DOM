'use strict';

function addingColumn(section, childNum = 0, tagName = 'th') {
  const currentChild = section.children[childNum];

  currentChild.children[3].insertAdjacentHTML('afterend',
    `<${tagName}>${currentChild.children[1].innerHTML}</${tagName}>`
  );
}

const header = document.querySelector('thead');
const body = document.querySelector('tbody');
const footer = document.querySelector('tfoot');

addingColumn(header);

for (let i = 0; i < body.children.length; i++) {
  addingColumn(body, i, 'td');
}

addingColumn(footer);
