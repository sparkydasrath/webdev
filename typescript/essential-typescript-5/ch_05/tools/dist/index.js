import { sum } from './calc';
function printMessage(msg) {
    console.log(`Message: ${msg}`);
}
printMessage(sum(1, 2, 3, 4, 5).toString());
