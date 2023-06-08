'use strict';

const table = document.body.children[0];

for (let i = 0; i < table.rows.length; i++) {
  const clone = table.rows[i].children[1].cloneNode(true);

  table.rows[i].children[3].insertAdjacentElement('afterend', clone);
}
