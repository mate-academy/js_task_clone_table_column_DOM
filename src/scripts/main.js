'use strict';

function add(a, b) {
  const row = document.querySelector(a);

  for (let i = 0; i <= row.children.length - 1; i++) {
    const text = row.rows[i].cells[1].innerHTML;

    const item = document.createElement(b);

    item.innerText = text;

    row.rows[i].insertBefore(item, row.rows[i].children[4]);
  }
}

add('tfoot', 'th');
add('thead', 'th');
add('tbody', 'th');
