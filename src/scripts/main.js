'use strict';

// write your code here

const column = document.querySelectorAll('tr')

for (let row = 0; row < column.length; row++) {

  let copyColumn = column[row].cells[1]

  column[row].insertBefore(copyColumn, column[row].children[1])
  column[row].insertBefore(copyColumn.cloneNode(true), column[row].children[4])
}
