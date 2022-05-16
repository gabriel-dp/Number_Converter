const HexLetters = {
    'A' : 10,
    'B' : 11,
    'C' : 12,
    'D' : 13,
    'E' : 14,
    'F' : 15
}

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

function digitsBase (base) {
    let counter = 0;
    for (;base > 1; counter++) {
        base /= 2;
    }
    return base;
}

function baseFactor (number, base) {
    let operator = number.toString(), result = '';

    while (operator.length > 0) {
        let char = operator[0];
        if (!(/^[0-9]+$/.test(char))) {
            char = HexLetters[char];
        }
        result += divisionByTwo(parseInt(char), digitsBase(base));
        operator = operator.substring(1);
    }
    
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
    console.log(result);
    return result;
}

export { ConvertToBinary, ConvertBinaryToDecimal };