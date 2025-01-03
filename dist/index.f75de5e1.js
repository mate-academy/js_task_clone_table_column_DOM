"use strict";
const rows = document.querySelectorAll("tr");
rows.forEach((row)=>{
    const cells = row.children;
    if (cells.length > 1) {
        const secondCell = cells[1];
        const clonedCell = secondCell.cloneNode(true);
        const lastCell = cells[cells.length - 1];
        row.insertBefore(clonedCell, lastCell);
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
