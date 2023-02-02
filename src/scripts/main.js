'use strict';

// write your code here
const trs = document.querySelectorAll('tr');

// eslint-disable-next-line max-len
trs.forEach((tr) => tr.insertBefore(tr.children[1].cloneNode(true), tr.children[4]));
