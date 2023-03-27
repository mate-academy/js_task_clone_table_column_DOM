'use strict';

const tableTr = document.querySelectorAll('tr');

for (let i = 0; i < tableTr.length; i++) {
  tableTr[i].children[4].before(tableTr[i].children[1].cloneNode(true));
};
