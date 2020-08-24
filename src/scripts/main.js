'use strict';

for (const ceil of document.querySelectorAll('tr')) {
  ceil.children[4].before(ceil.children[1].cloneNode(true));
}
