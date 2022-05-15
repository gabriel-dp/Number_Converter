import styled from 'styled-components';

export const OptionsContainer = styled.div`
    max-width: 90%;
    border-radius: 0.75rem;
    background-color: #666;
    filter: drop-shadow(0 0.25rem 0.15rem #333);
    padding: 0 1rem;

    margin: 1rem;
    overflow: hidden;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Option = styled.div`
    background-color: ${props => props.selected === props.datakey ? '#888' : '#666'};
    padding: 0.5rem 0.8rem;
    
    color: white;
    font-size: 1rem;
    user-select: none;
    text-decoration: bold;

    cursor: pointer;
    transition: all 0.2s ease;

    filter: ${props => props.isSelected === true ? 'drop-shadow(0 0.25rem 0.15rem #222);' : 'background-color: #666'};
    
    :hover {
        background-color: #888;
    }
`;  