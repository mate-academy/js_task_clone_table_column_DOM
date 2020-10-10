'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach(({ children }) => {
  children[children.length - 1].before(children[1].cloneNode(true));
});
