'use strict';

document.querySelectorAll('tr').forEach(elem => {
  elem.children[4].before(elem.children[1].cloneNode(true));
});
