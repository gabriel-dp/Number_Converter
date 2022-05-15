import { useState, useEffect } from 'react';

import TypeSelector from '../../components/TypeSelector';
import InputNumber from '../../components/InputNumber';

import {Screen} from './styles';

const Converter = () => {

    const [typeFrom, setTypeFrom] = useState('Binary');         //original type
    const handleTypeFromChange = (type) => setTypeFrom(type);

    const [typeTo, setTypeTo] = useState('Decimal');            //type to convert
    const handleTypeToChange = (type) => setTypeTo(type);

    const [original, setOriginal] = useState(null);
    const [result, setResult] = useState(null);

    const handleInputChange = (isValid, value) => {
        if (isValid) setOriginal(value);
        else setOriginal(null);
    }

    useEffect (() => {
        if (original === null) {
            setResult(null);
        } else {
            //calculate
        }
    }, [typeFrom, original, typeTo]);

    return (
        <Screen>
            <TypeSelector changeType={handleTypeFromChange} selected={typeFrom}/>
            <InputNumber handleInputChange={handleInputChange} type={typeFrom}/>
            <TypeSelector changeType={handleTypeToChange} selected={typeTo}/>
        </Screen>
    );
}

export default Converter;