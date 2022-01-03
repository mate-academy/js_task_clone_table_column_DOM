'use strict';

const items = document.querySelectorAll('tr');

for (const item of items) {
  let newItem;

  switch (item.firstElementChild.tagName) {
    case 'TH':
      newItem = document.createElement('th');
      break;

    default:
      newItem = document.createElement('td');
  }

  newItem.textContent = item.children[1].textContent;
  item.children[4].before(newItem);
}
