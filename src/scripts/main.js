'use strict';

const allTr = document.querySelectorAll('tr');

[...allTr].map(el => {
  const clonePosition = el.children[1].cloneNode(true);

  [...el.children][el.children.length - 2].after(clonePosition);
});
