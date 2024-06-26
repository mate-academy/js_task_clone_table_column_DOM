'use strict';

const trsBody = document.querySelectorAll('tr');
const column = [];
const lastChild = [];

for (const item of trsBody) {
  const items = item.querySelectorAll('td, th');

  if (items.length > 1) {
    column.push(items[1]);
    lastChild.push(item.lastElementChild);
  }
}

column.forEach((item, index) => {
  const clone = item.cloneNode(true);

  lastChild[index].before(clone);
});
