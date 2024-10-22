'use strict';

const trs = document.querySelectorAll('tr');

trs.forEach((el) => {
  const parentElement = el;

  if (parentElement.children.length > 1) {
    const firstChild = parentElement.children[1];
    const clonedChild = firstChild.cloneNode(true);

    parentElement.insertBefore(
      clonedChild,
      parentElement.children[parentElement.children.length - 1],
    );
  }
});
