import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    gap: 2.4rem;
    max-width: 1440px;
    margin: auto;
    color: ${({ theme }) => theme.c.white};
    background-color: ${({ theme }) => theme.c.darkBlue};
    overflow: hidden;

    @media (min-width: 768px) {
        gap: 3.3rem;
        padding: 2.3rem 2.5rem 5.6rem 2.5rem;
    }

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 43px 1fr;
    }

    & > nav {
        padding-left: 0;
        @media (min-width: 1440px) {
            grid-column: 1 / 1;
            grid-row: 1 / 3;
        }
    }

    & > div:nth-child(2) {
        padding-left: 1.6rem;
        @media (min-width: 768px) {
            padding-left: 0;
        }
        @media (min-width: 1440px) {
            grid-column: 2 / 2;
        }
    }

    & > div:nth-child(3) {
        padding-left: 1.6rem;
        @media (min-width: 768px) {
            padding-left: 0;
        }
        @media (min-width: 1440px) {
            grid-column: 2 / 2;
        }
    }
`;
