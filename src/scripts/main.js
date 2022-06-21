'use strict';

const tr = document.querySelectorAll('tr');

[...tr].forEach((elem) => {
  elem.children[4].before(elem.children[1].cloneNode(true));
});
