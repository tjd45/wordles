import styled from 'styled-components';

export const Wrapper = styled.a`
    width: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 20px;
    text-decoration: none;
    color: #000000;
    padding: 10px;
    margin: 10px;
    text-align: center;
    
    background: var(--white);

    :hover{
        opacity: 0.8;
    }
`;