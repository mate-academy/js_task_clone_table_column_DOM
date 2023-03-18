'use strict';

const table = document.querySelectorAll('tr');

table.forEach(person => {
  const tr = person.children[1];

  person.children[4].before(tr.cloneNode(true));
});
