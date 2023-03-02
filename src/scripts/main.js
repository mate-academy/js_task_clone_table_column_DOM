'use strict';

const lines = document.querySelectorAll('tr');

for (const line of lines) {
  const clone = line.children[1].cloneNode(true);

  line.children[4].before(clone);
}
