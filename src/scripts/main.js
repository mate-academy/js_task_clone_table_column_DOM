'use strict';

const result = document.querySelectorAll('tr');

for (const key of result) {
  key.insertBefore(key.cells[1].cloneNode(true), key.cells[4]);
}
