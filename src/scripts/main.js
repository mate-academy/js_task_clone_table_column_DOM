'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  const th = document.createElement('th');
  const td = document.createElement('td');

  th.textContent = item.children[1].textContent;
  td.textContent = item.children[1].textContent;

  item.firstElementChild.tagName === 'TH'
    ? item.insertBefore(th, item.lastElementChild)
    : item.insertBefore(td, item.lastElementChild);
}
