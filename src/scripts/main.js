'use strict';

const table = document.querySelector('table').children;

const header = (table[0]);
const tBody = (table[1]);
const tFooter = (table[2]);

function findPosition(element, index) {
  const rows = element.children[index];
  const insertPosition = element.children[index].children[4];
  const copy = document.createElement('th');

  copy.innerText = rows.children[1].innerText;
  element.children[index].insertBefore(copy, insertPosition);
}

for (let i = 0; i < tBody.children.length; i++) {
  findPosition(tBody, i);
};

for (let i = 0; i < header.children.length; i++) {
  findPosition(header, i);
};

for (let i = 0; i < tFooter.children.length; i++) {
  findPosition(tFooter, i);
};
