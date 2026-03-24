'use strict';

const k = document.querySelector('thead tr');
const m = Array.from(k.children);

m[m.length - 1].before(m[1].cloneNode(true)); // here is clone

const w = document.querySelector('tfoot tr');
const f = Array.from(w.children);

f[f.length - 1].before(f[1].cloneNode(true));

const col = [...document.querySelectorAll('tbody tr')];

for (let i = 0; i < col.length; i++) {
  const s = Array.from(col[i].children);

  s[4].before(s[1].cloneNode(true));
}
