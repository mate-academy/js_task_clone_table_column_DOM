'use strict';

const lengthCollection = document.getElementsByTagName('tr');

for (let i = 0; i < lengthCollection.length; i++) {
  const collectionTr = document.getElementsByTagName('tr')[i];

  const child = collectionTr.children[1];

  const copyChild = child.cloneNode(true);

  collectionTr.insertBefore(copyChild, collectionTr.children[4]);
}
