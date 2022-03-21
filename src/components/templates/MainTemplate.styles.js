import styled from 'styled-components';

export const Wrapper = styled.div`
    --paddingLeft: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    height: 100vh;
    color: ${({ theme }) => theme.c.white};
    background-color: ${({ theme }) => theme.c.darkBlue};
    overflow-x: scroll;

    @media (min-width: 768px) {
        gap: 3.3rem;
    }

    & > nav {
        padding-left: 0;
    }

    & > div:nth-child(2) {
        padding-left: var(--paddingLeft);
    }

    & > div:nth-child(3) {
        padding-left: var(--paddingLeft);
    }
`;
