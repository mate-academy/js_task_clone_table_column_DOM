'use strict';

// write your code here

const sections = document.querySelectorAll('tr');

for (let i = 0; i < sections.length; i++) {
  const elem = sections[i];

  const column = elem.children[1].cloneNode(true);

  elem.children[4].before(column);
}
