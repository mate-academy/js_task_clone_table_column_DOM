'use strict';

const list = document.querySelectorAll('tr');

// [...list].map(elem => console.log(elem.children));

for (const key in [...list]) {
  list[key].insertBefore(list[key]
    .children[1].cloneNode(true), list[key].children[4]);
}
