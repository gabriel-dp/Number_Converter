import NumericSystems from '../../utils/NumericSystems';

import { OptionsContainer, Option, Title } from './styles';

const TypeSelector = ({ title, changeType, selected }) => {

    const handleTypeChange = (id) => {
        changeType(id);
    }

    return (
        <>
            <Title>{title}</Title>
            <OptionsContainer>
                {
                    Object.keys(NumericSystems).map((num) => 
                    { 
                        let id = NumericSystems[num]['id'];
                        return (
                            <Option 
                                key={num}
                                datakey={num}
                                onClick={() => handleTypeChange(num)}
                                selected={selected}
                            >
                                {id}
                            </Option>
                        )
                    })
                }
            </OptionsContainer>
        </>
    );
}

export default TypeSelector;