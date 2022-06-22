'use strict';

// write your code here

const tr = document.querySelectorAll('tr');

for (const item of tr) {
  // console.log(item.children[1]);

  item.children[3].after(item.children[1].cloneNode(true));
}
