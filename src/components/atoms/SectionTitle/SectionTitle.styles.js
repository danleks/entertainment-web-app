import styled from 'styled-components';

export const SectionTitleStyles = styled.h2`
    padding-bottom: ${({ trending }) => (trending ? '1.6rem' : '2.4rem')};
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fw.light};
    text-transform: ${({ searchValue }) => (searchValue ? 'capitalize' : '')};
    letter-spacing: -0.31px;
    color: ${({ theme }) => theme.c.white};
    @media (min-width: 768px) {
        padding-bottom: ${({ trending }) => (trending ? '2.5rem' : '2.4rem')};
    }
    @media (min-width: 1440px) {
        padding-bottom: ${({ trending }) => (trending ? '2.5rem' : '3.2rem')};
    }
`;
