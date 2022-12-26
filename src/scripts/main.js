'use strict';

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  if (item.firstElementChild.tagName === 'TH') {
    const th = document.createElement('th');

    th.textContent = item.children[1].textContent;
    item.insertBefore(th, item.lastElementChild);
  } else {
    const td = document.createElement('td');

    td.textContent = item.children[1].textContent;
    item.insertBefore(td, item.lastElementChild);
  };
}
