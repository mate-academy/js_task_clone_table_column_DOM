'use strict';

const colums = document.querySelectorAll('tr');

for (const column of colums) {
  const newPosition = column.children[1].cloneNode(true);
  const salary = column.children[4];

  column.append(newPosition, salary);
}
