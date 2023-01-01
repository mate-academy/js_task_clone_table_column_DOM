'use strict';

const tr = document.querySelectorAll('tr');

for (const field of tr) {
  const copy = field.cells[1].cloneNode(true);

  field.children[3].after(copy);
}
