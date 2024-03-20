'use strict';

const list = document.querySelectorAll('tr');

const clone = [...list].map((tr) => tr.children[1]);

for (let i = 0; i < list.length; i++) {
  list[i].children[4].before(clone[i].cloneNode(true));
}
