var repeatString = function (repeatedString, noOfTimes) {
    let res = "";

    if (noOfTimes === 0) {
        return res;
    }

    if (noOfTimes < 0) {
        return "ERROR";
    }

    for (let i = 0; i < noOfTimes; i++) {
        res += repeatedString;
    }

    return res.toString();
}

module.exports = repeatString