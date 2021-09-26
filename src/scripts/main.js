'use strict';

const tr = document.querySelectorAll('tr');

for (const key in tr) {
  const item = tr[key].children[1];
  const item2 = tr[key].children[3];
  const clone = item.cloneNode(true);

  item2.after(clone);
}
