'use strict';

const rowTarget = document.querySelectorAll('tr');

[...rowTarget].map(row => {
  row
    .lastElementChild
    .before(row.firstElementChild.nextElementSibling.cloneNode(true));
});
