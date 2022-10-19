'use strict';

function add(folder, tag) {
  const row = document.querySelector(folder);

  for (let i = 0; i <= row.children.length - 1; i++) {
    const text = row.rows[i].cells[1].innerHTML;

    const item = document.createElement(tag);

    item.innerText = text;

    row.rows[i].insertBefore(item, row.rows[i].children[4]);
  }
}

add('tfoot', 'td');
add('thead', 'td');
add('tbody', 'td');
