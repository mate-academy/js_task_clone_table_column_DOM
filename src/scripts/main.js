'use strict';

const line = document.querySelectorAll('tr');

for (const key of line) {
  let column = document.createElement('th');

  if (key.children[1].tagName === 'TD') {
    column = document.createElement('td');
  }

  column.innerText = key.children[1].innerText;

  key.children[4].before(column);
}
