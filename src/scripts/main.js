'use strict';

const line = document.querySelectorAll('tr');

for (const key of line) {
  let neww = document.createElement('th');

  if (key.children[1].tagName === 'TD') {
    neww = document.createElement('td');
  }

  neww.innerText = key.children[1].innerText;

  key.children[4].before(neww);
}
