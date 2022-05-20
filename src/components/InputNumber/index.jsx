import { useState, useEffect } from 'react';
import NumericSystems from '../../utils/NumericSystems';

import { InputArea } from "./styles";

const InputNumber = ({ type, handleInputChange }) => {

    const [inputRegex, setInputRegex] = useState('^[0-9]*$');
    const [isValid, setIsValid] = useState(true);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (type !== null) {
            let regex = new RegExp(NumericSystems[type]['regex']);
            setInputRegex(regex);
        }
    }, [type]);
    
    useEffect(() => {
        if (inputValue) setIsValid(inputRegex.test(inputValue));
        else setIsValid(true);
    }, [inputValue, inputRegex]);

    const checkValue = (event) => {
        let value = (event.target.value).toUpperCase();
        setInputValue(value);
    }

    useEffect(() => {
        handleInputChange(isValid, inputValue);
    }, [isValid, inputValue, handleInputChange]);

    return (
        <>
            <InputArea 
                type='text' 
                onChange={event => checkValue(event)}
                value={inputValue}
                isValid={isValid}
            />
        </>
    );
}

export default InputNumber;