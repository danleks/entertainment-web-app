import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    padding-left: 1.6rem;
    color: ${({ theme }) => theme.c.white};
    background-color: ${({ theme }) => theme.c.darkBlue};
    overflow-x: scroll;
`;
