'use strict';

// head and foot
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

[thead, tfoot].forEach((el) => {
  const lastElement = el.querySelector('tr').lastElementChild;
  const title = document.createElement('th');

  title.innerText = 'Position';

  lastElement.insertAdjacentElement('beforebegin', title);
});

// body
const tbody = document.querySelector('tbody');

const people = [...tbody.children];

people.forEach((person) => {
  const position = [...person.children][1].cloneNode(true);

  person.lastElementChild.insertAdjacentElement('beforebegin', position);
});
