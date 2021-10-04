'use strict';

const table = [...document.querySelectorAll('tr')];

for (const row of table) {
  const item = row.children[1].cloneNode(true);
  const tag = item.nodeName.toLowerCase();

  row.children[4].insertAdjacentHTML('beforebegin', `

    <${tag}>${item.textContent}</${tag}>
  `);

  // row.children[4].before(row.children[1].cloneNode(true));
}
