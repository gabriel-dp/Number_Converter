import { useState } from 'react';

import TypeSelector from '../../components/TypeSelector';

import {Screen} from './styles';

const Converter = () => {

    const [typeFrom, setTypeFrom] = useState(null);     //original type
    const [typeTo, setTypeTo] = useState(null);         //type to convert

    const handleTypeFromChange = (id) => {
        setTypeFrom(id);
    }

    const handleTypeToChange = (id) => {
        setTypeTo(id)
    }

    return (
        <Screen>
            <TypeSelector changeType={handleTypeFromChange} selected={typeFrom}/>
            <TypeSelector changeType={handleTypeToChange} selected={typeTo}/>
        </Screen>
    );
}

export default Converter;