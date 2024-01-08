function greet(person: string, date: Date) {
    console.log('Hello ' + person + '! Today is ' + date.toDateString() + '.');
}
greet("John", new Date());


type Point = {
    x: number;
    y: number;
};




/**
 * 
 * @param p 
 */
function logPoint(p: Point): void {
    console.log(`${p.x}, ${p.y}`);
}

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}