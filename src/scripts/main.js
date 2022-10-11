'use strict';

const trCollection = document.querySelectorAll('tr');

trCollection.forEach((item) => {
  item.children[4].before(item.children[1].cloneNode(true));
});
