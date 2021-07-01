'use strict';

const headers = document.querySelector('thead').querySelector('tr');
const body = document.querySelector('tbody');
const footer = document.querySelector('tfoot').querySelector('tr');
const from = 1;
const to = headers.children.length - 1;

const headerItemCopy = document.createElement('th');
const headerItemToCopy = headers.children[from];
const footerItemCopy = document.createElement('th');
const footerItemToCopy = footer.children[from];

headerItemCopy.innerText = headerItemToCopy.innerText;
headers.children[to].before(headerItemCopy);
footerItemCopy.innerText = footerItemToCopy.innerText;
footer.children[to].before(footerItemCopy);

for (let i = 0; i < body.children.length; i++) {
  const cellCopy = document.createElement('td');
  const cellToCopy = body.children[i].children[from];

  cellCopy.innerText = cellToCopy.innerText;
  body.children[i].children[to].before(cellCopy);
}
