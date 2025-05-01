'use strict';

const trows = document.querySelectorAll('tr');

for (const tr of trows) {
  const secondChild = tr.querySelector(':nth-child(2)');
  const fourthChild = tr.querySelector(':nth-child(4)');

  if (secondChild && fourthChild) {
    const cloneSecondChild = document.createElement(`${secondChild.tagName}`);

    cloneSecondChild.textContent = secondChild.textContent;
    fourthChild.after(cloneSecondChild);
  }
}
