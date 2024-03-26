'use strict';

// write your code here
const positions = document.querySelectorAll('tr');

positions.forEach((pos) => {
  const clone = pos.children[1].cloneNode(true);

  pos.children[3].after(clone);
});
