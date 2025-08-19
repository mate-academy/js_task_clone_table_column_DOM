'use strict';

const rows = document.querySelectorAll('thead tr, tbody tr, tfoot tr');

// duplicate a second column to a pre-last position
function duplicateSecondColumn(list) {
  for (const char of list) {
    if (char.children.length === 0) {
      continue;
    }

    const position = char.children[1];
    const preLast = char.children[char.children.length - 1];
    const clone = position.cloneNode(true);

    preLast.before(clone);
  }
}

duplicateSecondColumn(rows);
