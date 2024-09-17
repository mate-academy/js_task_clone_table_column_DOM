'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  const th = document.createElement('th');
  const td = document.createElement('td');

  th.textContent = item.children[1].textContent;
  td.textContent = item.children[1].textContent;

  const lastChild = item.lastElementChild;

  item.firstElementChild.tagName === 'TH'
    ? lastChild.before(th)
    : lastChild.before(td);
}
