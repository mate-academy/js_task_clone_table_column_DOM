'use strict';

const header = document.querySelector('thead');
const head = header.children[0].children[1];

const copy = document.createElement('th');

copy.textContent = head.textContent;

header.children[0].insertBefore(copy,
  header.children[0].children[header.children[0].children.length - 1]);

const tBody = document.querySelector('tbody');

for (let i = 0; i < tBody.children.length; i++) {
  const b = tBody.children[i].children[1];
  const copy2 = document.createElement('td');

  copy2.textContent = b.textContent;

  tBody.children[i].insertBefore(copy2,
    tBody.children[i].children[tBody.children[i].children.length - 1]);
};

const footer = document.querySelector('tfoot');
const foot = header.children[0].children[1];
const copy3 = document.createElement('th');

copy3.textContent = foot.textContent;

footer.children[0].insertBefore(copy3,
  footer.children[0].children[footer.children[0].children.length - 1]);
