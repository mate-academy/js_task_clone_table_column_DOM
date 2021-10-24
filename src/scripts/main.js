'use strict';

// write your code here
const element = document.querySelectorAll('tr');

[...element].map(item => {
  const tag = (item.children[0].tagName).toLowerCase();
  const newElement = document.createElement(tag);
  const copy = item.children[1].textContent;

  newElement.textContent = copy;
  item.children[4].before(newElement);
});
