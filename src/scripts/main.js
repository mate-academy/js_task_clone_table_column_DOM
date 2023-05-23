'use strict';

  let table = document.querySelector('table');
  let rows = table.getElementsByTagName('tr');

  for (var i = 0; i < rows.length; i++) {
    let secondChild = rows[i].childNodes[3].cloneNode(true); 
    let lastChild = rows[i].childNodes[9];
    rows[i].insertBefore(secondChild, lastChild);
  }

  
