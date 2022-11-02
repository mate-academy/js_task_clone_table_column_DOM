'use strict';

const colum = document.querySelectorAll('tr');

colum.forEach(item => item.children[3].after(item.children[1].cloneNode(true)));
