'use strict';

// write your code here
const trs = document.querySelectorAll('tr');

trs.forEach((elem) => {
  let item = null;
  const hasThElement = Array.from(elem.children).some(
    (child) => child.tagName === 'TH',
  );
  const copy = elem.children[1].textContent;

  if (hasThElement) {
    item = document.createElement('th');
    item.textContent = copy;
    elem.children[elem.children.length - 1].before(item);
  } else {
    item = document.createElement('td');
    item.textContent = copy;
    elem.children[elem.children.length - 1].before(item);
  }
});
