// define variable at global scope
let myGVar = 0;

function testingScope(): void {
    let a = "one";
    console.log(a);
}

// destructuring

let input = [1, 2];
let [f, s] = input;
console.log(`f: ${f}, s: ${s}`);

// dest objects
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log("whole", wholeObject, a, b);
}

keepWholeObject({ a: "111", b: 22222 });