'use strict';

const rowElements = document.querySelectorAll('tr');

for (let i = 0; i < rowElements.length; i++) {
  const tagName = (i === 0 || i === rowElements.length - 1) ? 'th' : 'td';
  const newElement = document.createElement(tagName);

  newElement.innerHTML = rowElements[i].children[1].innerHTML;
  rowElements[i].children[4].before(newElement);
}
