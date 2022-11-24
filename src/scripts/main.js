'use strict';

const [...row] = document.querySelectorAll('tr');

row.forEach((element) => {
  const copy = element.children[1];

  element.children[3].insertAdjacentHTML('afterend', `
  <${copy.tagName}>${copy.textContent}</${copy.tagName}>`);
});
