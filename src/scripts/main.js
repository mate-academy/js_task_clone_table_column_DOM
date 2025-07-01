'use strict';

const thead = document.querySelector('table thead tr');
const tbody = document.querySelector('table tbody');
const tfoot = document.querySelector('table tfoot tr');

[thead, tfoot].forEach((element) => {
  const copy = document.createElement('th');

  Array.from(element.children).forEach((child, index) => {
    if (index === 1) {
      copy.textContent = child.textContent;
    }

    if (element.lastElementChild) {
      element.insertBefore(copy, element.lastElementChild);
    }
  });
});

Array.from(tbody.children).forEach((element) => {
  const copy = document.createElement('td');

  Array.from(element.children).forEach((child, index) => {
    if (index === 1) {
      copy.textContent = child.textContent;
    }

    if (element.lastElementChild) {
      element.insertBefore(copy, element.lastElementChild);
    }
  });
});
