import styled from 'styled-components';

export const InputArea = styled.input`
    min-width: 8rem;
    height: 2rem;
    font-size: 1rem;
    margin-bottom: 2rem;
    background-color: #DDD;

    border-radius: 1rem;
    padding: 1rem;
    border: none;
    outline: ${props => props.isValid ? 'none' : '3px solid #f00'};

    select:focus {
        outline: none;
    }
`;