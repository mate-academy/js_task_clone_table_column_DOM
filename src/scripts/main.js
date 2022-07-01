'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i <= tr.length; i++) {
  const type = tr[i].children[0].tagName;
  const newItem = document.createElement(type);
  newItem.textContent = tr[i].children[1].textContent;
  tr[i].children[4].before(newItem);
}
