'use strict';

const tr = document.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const thLoop = tr[i].querySelector('th');
  const tdLoop = tr[i].querySelector('td');

  if (tr[i].contains(thLoop)) {
    const th = tr[i].querySelectorAll('th')[1];

    tr[i].children[3].after(th.cloneNode(true));
  }

  if (tr[i].contains(tdLoop)) {
    const td = tr[i].querySelectorAll('td')[1];

    tr[i].children[3].after(td.cloneNode(true));
  }
}
