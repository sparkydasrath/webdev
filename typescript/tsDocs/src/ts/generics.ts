// ex1 hello world of generics

//sad 'generic'
function identity(arg: any): any {
    return arg;
}

// real generic
function identity2<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}

identity2<number>(1);
identity2<string>("1");

// ex2 generic interface
// interface with generic method

interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity3: GenericIdentityFn = identity3;

// moving type param to interface def   

interface GenericIdentityFn2<T> {
    (arg: T): T;
}
// result of moving type param to interface def   
function identity4<T>(arg: T): T {
    return arg;
}

let myIdentity4: GenericIdentityFn2<number> = identity4;

//ex3 generic classes
class GenericNumber<T>{
    zeroVal: T;
    add: (x: T, y: T) => T;
}

let genNumber = new GenericNumber<number>();
genNumber.zeroVal = 0;
genNumber.add = (x, y) => x + y;

// ex4 generic constraints
