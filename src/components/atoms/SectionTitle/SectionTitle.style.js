import styled from 'styled-components';

export const SectionTitleStyles = styled.h2`
    padding-top: 2.4rem;
    padding-bottom: ${({ trending }) => (trending ? '1.6rem' : '2.4rem')};
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fw.light};
    letter-spacing: -0.31px;

    color: ${({ theme }) => theme.c.white};
`;
