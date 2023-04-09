'use strict';

// write your code here
const tr = document.querySelectorAll('tr');

for(let i = 0; i < tr.length; i++) {
  const secondItem = tr[i].children[1];
  const lastItem = tr[i].children[tr[i].children.length - 1];
  const tag = secondItem.tagName.toLowerCase();

  lastItem.remove()

  tr[i].insertAdjacentHTML('beforeend', `
  <${tag}>${secondItem.innerText}</${tag}>
  <${tag}>${lastItem.innerText}</${tag}>
  `)
}