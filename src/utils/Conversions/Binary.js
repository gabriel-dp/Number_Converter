const HexLetters = {
    'A' : 10,
    'B' : 11,
    'C' : 12,
    'D' : 13,
    'E' : 14,
    'F' : 15
}

/*
    converts a number to binary
    divides the number by two, the remainder is the digit of binary and the quotient will be divided until it ends
    for decimals, insert the full number
    for octal or hexadecimal, insert digit-by-digit
*/
function divisionByTwo (number, digits) {
    let operator = number, remainder = '';

    do {
        remainder += operator%2;
        operator = Math.trunc(operator/2);
    } while (operator !== 0);

    let result = remainder.split("").reverse().join("");
    if (result.length < digits) {
        result = ('0').repeat(digits-result.length) + result;
    }

    return result;
}

/*  
    converts a octal or hexadecimal number to binary
    gets the 
*/
function baseFactor (number, base) {
    let operator = number.toString(), result = '';

    while (operator.length > 0) {
        let char = operator[0];
        if (!(/^[0-9]+$/.test(char))) char = HexLetters[char];
        result += divisionByTwo(parseInt(char), Math.log2(base));
        operator = operator.substring(1);
    }
    result = (parseInt(result)).toString();

    return result;
}

function ConvertToBinary (number, base) {
    if (base === 10) {
        return divisionByTwo(number, 1);
    } else {
        return baseFactor(number, base);
    }
}

function ConvertBinaryToDecimal (number) {
    let operator = (parseInt(number)).toString(), result = 0;
    while (operator.length > 0) {
        result += (parseInt(operator[0])*Math.pow(2, operator.length-1));
        operator = operator.substring(1);
    }
    //console.log(result.toString());
    return result.toString();
}

function ConvertDecimalToHex (number) {
    let operator = parseInt(number);
    operator = Object.keys(HexLetters).find(key => HexLetters[key] === operator); 
    return operator.toString();
}

function ConvertBinaryToBase2 (number, base) {
    let operator = number.toString(), result = '';
    let digits = Math.log2(base);

    while (operator.length > 0) {
        let char = operator;

        if (operator.length >= digits) char = operator.slice(operator.length - digits);
        char = ConvertBinaryToDecimal(char);
        if (parseInt(char) > 9) char = ConvertDecimalToHex(char);

        result += char;
        operator = operator.slice(0, -digits);
    }

    let reverseResult = result.split("").reverse().join("");
    return reverseResult;
}

export { ConvertToBinary, ConvertBinaryToDecimal, ConvertBinaryToBase2 };