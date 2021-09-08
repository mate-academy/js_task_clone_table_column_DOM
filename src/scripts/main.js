'use strict';

// write your code here

const list = document.querySelectorAll('tr');

for (let i = 0; i < list.length; i++) {
  const item = list[i].children[1];

  list[i].children[4].before(item.cloneNode(true));
}
