import styled from 'styled-components';

export const ResultText = styled.h2`
    color: white;
    font-size: 1.35rem;
`;

export const ResultArea = styled.div`
    margin-top: 5rem;   
    filter: drop-shadow(0 0.25rem 0.15rem #222);
    padding: 0 2rem;
    border-radius: 1rem;

    min-width: 5rem;
    min-height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    filter: drop-shadow(0 0.25rem 0.15rem #222);
`;