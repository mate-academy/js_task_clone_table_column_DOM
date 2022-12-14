'use strict';

const all = document.querySelectorAll('tr');

for (let i = 0; i < all.length; i++) {
    const additionalCell = all[i].children[1].cloneNode(true);
  
    all[i].children[3].after(additionalCell);
  };