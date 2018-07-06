"use strict";
// ex1
// function printLable(labelObj: { label: string }) {
//     console.log(labelObj.label);
// }
let mySearch;
mySearch = function (source, substring) {
    let result = source.search(substring);
    return result > -1;
};
