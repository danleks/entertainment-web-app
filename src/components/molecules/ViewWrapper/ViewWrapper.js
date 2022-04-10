import styled from 'styled-components';

export const ViewWrapper = styled.div`
    --gap: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    & > section:nth-of-type(2) {
        padding-top: calc(6.8rem - var(--gap));

        @media (min-width: 768px) {
            padding-top: calc(10rem - var(--gap));
        }

        @media (min-width: 1440px) {
            padding-top: calc(9.2rem - var(--gap));
        }
    }

    @media (min-width: 768px) {
        --gap: 3.9rem;
    }

    @media (min-width: 1440px) {
        --gap: 4rem;
    }
`;
