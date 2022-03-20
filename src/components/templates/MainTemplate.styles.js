import styled from 'styled-components';

export const Wrapper = styled.div`
    --paddingLeft: 1.6rem;
    height: 100vh;
    color: ${({ theme }) => theme.c.white};
    background-color: ${({ theme }) => theme.c.darkBlue};
    overflow-x: scroll;

    & > *:not(:first-child) {
        padding-left: var(--paddingLeft);

        @media (min-width: 768px) {
            --paddingLeft: 2.5rem;
        }
    }
`;
