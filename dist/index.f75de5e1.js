"use strict";
const table = document.querySelector("table");
const tHead = table.tHead;
const tBody = table.tBodies;
const tFoot = table.tFoot;
const addAndReplaceCell = (colection)=>{
    [
        ...colection.rows
    ].forEach((row)=>{
        const cells = [
            ...row.cells
        ];
        const position = cells[1];
        const newCell = document.createElement(row.cells[0].tagName === "TH" ? "th" : "td");
        newCell.innerHTML = position.innerHTML;
        row.insertBefore(newCell, cells[4]);
    });
};
addAndReplaceCell(tHead);
addAndReplaceCell(tBody[0]);
addAndReplaceCell(tFoot);

//# sourceMappingURL=index.f75de5e1.js.map
