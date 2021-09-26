'use strict';

const tr = document.querySelectorAll('tr');

for (const th in tr) {
  const item = tr[th].children[1];
  const item2 = tr[th].children[3];
  const clone = item.cloneNode(true);

  item2.after(clone);
}
