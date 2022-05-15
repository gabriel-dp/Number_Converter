import NumericSystems from '../../utils/NumericSystems';

import { OptionsContainer, Option } from './styles';

const TypeSelector = ({changeType, selected}) => {

    const handleTypeChange = (id) => {
        changeType(id);
    }

    return (
        <>
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