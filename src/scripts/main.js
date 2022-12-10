'use strict';

const cell = document.querySelectorAll('tr');

cell.forEach(element => {
  const value = element.children[1].cloneNode(true);

  element.insertBefore(value, element.children[4]);
});
