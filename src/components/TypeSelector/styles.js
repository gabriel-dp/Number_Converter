import styled from 'styled-components';

export const OptionsContainer = styled.div`
    max-width: 90%;
    border-radius: 0.75rem;
    background-color: #555;
    border: 1px solid rgba(255, 255, 255, 0.1);
    filter: drop-shadow(0 0.25rem 0.15rem #222);
    padding: 0 1rem;

    margin: 1rem;
    overflow: hidden;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Option = styled.div`
    background-color: ${props => props.selected === props.datakey ? '#777' : '#555'};
    padding: 0.5rem 0.8rem;
    
    color: white;
    font-size: 1rem;
    user-select: none;
    text-decoration: bold;

    cursor: pointer;
    transition: all 0.25s ease;

    filter: ${props => props.isSelected === true ? 'drop-shadow(0 0.25rem 0.15rem #222);' : 'background-color: #555'};
    
    :hover {
        background-color: #777;
    }
`;  

export const Title = styled.h2`
    color: white;
    font-size: 1.4rem;
    margin-top: 2rem;
`;