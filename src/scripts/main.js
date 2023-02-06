'use strict';

const tbl = document.getElementsByTagName('table')[0];

for (const node of tbl.children) {
  for (const n of node.children) {
    const extra = document.createElement(n.children[0].tagName);

    extra.textContent = n.children[1].textContent;

    const cols = [...[...n.children].slice(0, 4), extra,
      ...[...n.children].slice(4)];

    n.innerHTML = '';
    cols.forEach(col => n.appendChild(col));
  };
}
