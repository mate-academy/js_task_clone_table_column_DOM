'use strict';

// write your code here
const element = document.querySelectorAll('tr');

[...element].forEach(item => 
  item.lastElementChild.before(item.children[1].cloneNode(true)))
