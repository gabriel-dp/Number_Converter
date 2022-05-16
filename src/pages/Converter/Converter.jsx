import { useState, useEffect } from 'react';
import NumberConverter from '../../utils/NumberConverter';

import TypeSelector from '../../components/TypeSelector';
import InputNumber from '../../components/InputNumber';

import {Screen} from './styles';

const Converter = () => {

    const [typeFrom, setTypeFrom] = useState('Binary');         //original type
    const handleTypeFromChange = (type) => setTypeFrom(type);

    const [typeTo, setTypeTo] = useState('Decimal');            //type to convert
    const handleTypeToChange = (type) => setTypeTo(type);

    const [original, setOriginal] = useState(null);
    const handleInputChange = (isValid, value) => {
        if (isValid) setOriginal(value);
        else setOriginal(null);
    }

    const [result, setResult] = useState(null);

    useEffect (() => {
        if (original === null) {
            setResult(null);
        } else {
            setResult(NumberConverter(typeFrom, original, typeTo));
        }
    }, [typeFrom, original, typeTo]);

    return (
        <Screen>
            <TypeSelector changeType={handleTypeFromChange} selected={typeFrom}/>
            <InputNumber handleInputChange={handleInputChange} type={typeFrom}/>
            <TypeSelector changeType={handleTypeToChange} selected={typeTo}/>
            <p>{result}</p>
        </Screen>
    );
}

export default Converter;