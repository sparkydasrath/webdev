var palindromes = function (valueToCheck) {

    // let res = "";
    // let temp = valueToCheck.split("");
    // console.log("temp = ", temp);
    // for (let i = 0; i < temp.length; i++) {
    //     if (temp[i] === ' ' ||
    //         temp[i] === ','

    //     ) {
    //         let t2 = temp.splice(i, 1);
    //         console.log("t2 = ", t2);

    //     }
    //     if (temp[i] === ' ')
    //         continue;
    //     res += temp[i];
    // }

    // let last = res[res.length - 1];
    // let res2 = "";
    // if (last === '.' || last === '!') {
    //     res2 = res.slice(0, res.length - 1);
    // }

    // FINAL SOLUTION
    // https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7

    let re = /[\W_]/g; // matches whole words - will not match punct chars and those will be replaced

    let regExCleaned = valueToCheck.toLowerCase().replace(re, "");
    console.log("regExCleaned", regExCleaned);

    let revStr = regExCleaned.split("").reverse().join("");
    console.log("revStr", revStr);

    return regExCleaned === revStr;

}

// palindromes("A car, a man, a maraca.");

module.exports = palindromes