'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const position = tr[i];

  const cloneElement = position.children[1].cloneNode(true);

  position.children[4].before(cloneElement);
}

