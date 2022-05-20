import NumericSystems from './NumericSystems';
import { ConvertToRoman, ConvertToInteger } from './Conversions/DecimalRoman';
import { ConvertToBinary, ConvertBinaryToDecimal, ConvertBinaryToBase2 } from './Conversions/Binary';

const ToDecimal = (value, typeFrom) => {
    if (typeFrom === 'Binary') return ConvertBinaryToDecimal(value);
    else return ConvertBinaryToDecimal(ConvertToBinary(value, NumericSystems[typeFrom]['base']));
}

const ToBase2 = (value, typeFrom, typeTo) => {
    if (typeFrom === 'Binary') return ConvertBinaryToBase2(value, 8);
    else return ConvertBinaryToBase2(ConvertToBinary(value, NumericSystems[typeFrom]['base']), NumericSystems[typeTo]['base']);
}

const ToRoman = (value, typeFrom) => {
    if (typeFrom !== 'Decimal') value = ToDecimal(value, typeFrom);
    return ConvertToRoman(value);
}

const ToBinary = (value, typeFrom) => {
    return ConvertToBinary(value, NumericSystems[typeFrom]['base']);
}


const NumberConverter = (typeFrom, value, typeTo) => {
    if (typeFrom === 'Roman' && typeTo !== 'Roman') {
        value = ConvertToInteger(value);
        typeFrom = 'Decimal';
    }

    if (typeFrom === typeTo) return value;
    else if (typeTo === 'Roman') return ToRoman(value, typeFrom);
    else if (typeTo === 'Binary') return ToBinary(value, typeFrom);
    else if (typeTo === 'Decimal') return ToDecimal(value, typeFrom);
    else return ToBase2(value, typeFrom, typeTo);
}

export default NumberConverter;