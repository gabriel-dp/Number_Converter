import { useState, useEffect } from 'react';
import NumberConverter from '../../utils/NumberConverter';

import TypeSelector from '../../components/TypeSelector';
import InputNumber from '../../components/InputNumber';
import Result from '../../components/Result';

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
            <TypeSelector title={"Origin type"} changeType={handleTypeFromChange} selected={typeFrom}/>
            <InputNumber handleInputChange={handleInputChange} type={typeFrom}/>
            <TypeSelector title={"Type to convert"} changeType={handleTypeToChange} selected={typeTo}/>
            <Result result={result}/>
        </Screen>
    );
}

export default Converter;