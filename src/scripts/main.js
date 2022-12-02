'use strict';

// write your code here
const strings = document.querySelectorAll('tr');

strings.forEach(string => {
  const copy = string.children[1].cloneNode(true);

  string.children[3].after(copy);
});
