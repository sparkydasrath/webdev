const caesar = function (string, shift) {
    return string
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => {
    console.log("n = ", n);
    console.log("m = ", m);
    let mm = (n % m + m) % m;
    console.log("mod op = ", mm);
    return mm;
}

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    console.log("code = ", code);
    console.log("code set = ", codeSet(code));

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {

        let modded = mod(code + shift - codeSet(code), 26) + codeSet(code);
        console.log("modded = ", modded);

        return String.fromCharCode(modded);
    }
    return char;
};

caesar("B", 3);

// copied solution over 
module.exports = caesar