var snakeCase = function (stringToSnake) {

    let re1 = /\s*/g;
    let result1 = stringToSnake.toLowerCase().replace(re1, "");

    let re2 = /[\W]/g;
    let result2 = result1.replace(re2, "_");

    result3 = "";
    if (result2[result2.length - 1] === "_")
        result3 = result2.substring(0, result2.length - 1);
    else {
        result3 = result2;
    }

    console.log("result3 ", result3);
    return result3;
}


snakeCase('Hello, World!');

module.exports = snakeCase