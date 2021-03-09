'use strict';

function copyColumnFromTo(from, to) {
  for (let i = 0; i < document.querySelector('table').rows['length']; i++) {
    document.querySelector('table').rows[i].cells[to].before(
      document.querySelector('table').rows[i].cells[from].cloneNode(true)
    );
  }
}

copyColumnFromTo(1, 4);
