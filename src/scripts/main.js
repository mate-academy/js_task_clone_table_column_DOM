'use strict';

const tr = [...document.querySelectorAll('tr')];

for (const row of tr) {
  row.lastElementChild.before(
    row.firstElementChild.nextElementSibling.cloneNode(true),
  );
}
