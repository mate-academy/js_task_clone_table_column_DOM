'use strict';

const head = document.querySelector('tr');

const headItem = document.querySelectorAll('th')[1];

head.children[3].after(headItem.cloneNode(true));

const body = document.querySelector('tbody');

for (const item of body.children) {
  item.children[3].after(item.children[1].cloneNode(true));
}

const foot = document.querySelector('tfoot');

const footItem = foot.children[0].children[1];

foot.children[0].children[3].after(footItem.cloneNode(true));
