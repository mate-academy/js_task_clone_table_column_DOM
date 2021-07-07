'use strict';

const people = document.querySelectorAll('tr');

[...people].forEach(person => {
  const copy = [...person.children][1].cloneNode(true);

  person.append(copy, [...person.children][4]);
});
