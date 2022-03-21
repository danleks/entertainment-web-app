import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    color: ${({ theme }) => theme.c.white};
    background-color: ${({ theme }) => theme.c.darkBlue};
    overflow-x: scroll;

    @media (min-width: 768px) {
        gap: 3.3rem;
        padding: 2.3rem 2.5rem 5.6rem 2.5rem;
    }

    & > nav {
        padding-left: 0;
    }

    & > div:nth-child(2) {
        padding-left: 1.6rem;
        @media (min-width: 768px) {
            padding-left: 0;
        }
    }

    & > div:nth-child(3) {
        padding-left: 1.6rem;
        @media (min-width: 768px) {
            padding-left: 0;
        }
    }
`;
