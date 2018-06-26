var reverseString = function (stringToReverse) {
    let result = stringToReverse.split("").reverse().join("");
    return result;
}

module.exports = reverseString