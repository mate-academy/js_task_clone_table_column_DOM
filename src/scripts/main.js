'use strict';

const table = [...document.querySelectorAll('tr')];

for (const person of table) {
  const copy = person.children[0].cloneNode(true);

  person.lastElementChild.before(copy);
}
