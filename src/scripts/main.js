'use strict';

const data = document.querySelectorAll('tr');

for (let i = 0; i < data.length; i++) {
  let copy = null;
  let lastChild = null;

  copy = data[i].children[1].cloneNode(true);
  lastChild = data[i].children[4];

  data[i].insertBefore(copy, lastChild);
}
