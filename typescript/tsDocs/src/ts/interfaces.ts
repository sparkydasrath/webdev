// ex1
// function printLable(labelObj: { label: string }) {
//     console.log(labelObj.label);
// }

// let myObj = { size: 10, label: "size 10" };
// printLable(myObj);

//ex2 - with interface
// interface LabelledValue {
//     label: string;
// }

// function printLabel2(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj2 = { size: 10, label: "Size 10 Object" };
// printLabel2(myObj2);

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;


//ex3 function types
interface searchFunc {
    (source: string, stubstring: string): boolean;
}

let mySearch: searchFunc;
mySearch = function (source: string, substring: string) {
    let result = source.search(substring);
    return result > -1;
}