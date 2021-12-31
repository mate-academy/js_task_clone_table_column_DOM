'use strict';

const query = document.querySelectorAll('tr');

const headText = query[0].children[1].innerHTML;
const newHeadItem = document.createElement('th');

newHeadItem.innerHTML = headText;

query[0].children[3].after(newHeadItem);

for (let i = 1; i < query.length - 1; i++) {
  const thisText = query[i].children[1].innerHTML;
  const newItem = document.createElement('td');

  newItem.innerHTML = thisText;

  const thisString = query[i].querySelectorAll('td');

  thisString[3].after(newItem);
}

const footer = document.querySelector('tfoot');
const footerItems = (footer.children[0].children);
const footerName = footerItems[1].innerHTML;
const newfooterItem = document.createElement('th');

newfooterItem.innerHTML = footerName;
footerItems[3].after(newfooterItem);
