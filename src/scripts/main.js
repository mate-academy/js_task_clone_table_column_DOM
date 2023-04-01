'use strict';

const tab = document.querySelector('table');

for (let i = 0; i < tab.rows.length; i++) {
  const clone = tab.rows[i].cells[1].cloneNode(true);

  tab.rows[i].cells[4].insertAdjacentElement('beforebegin', clone);
}
