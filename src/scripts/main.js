'use strict';

// write your code here
const table = document.getElementsByTagName('table')[0];

[...table.rows].forEach((row) => {
  const children = [...row.children];

  children[3].after(children[1].cloneNode('deep'));
});
