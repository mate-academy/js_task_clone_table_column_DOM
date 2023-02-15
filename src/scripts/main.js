'use strict';

const list = document.querySelectorAll('tr');

[...list].map(item => {
  const addItem = item.children[1].cloneNode(true);

  return item.children[3].after(addItem);
});
