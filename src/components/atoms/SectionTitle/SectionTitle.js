import styled from 'styled-components';

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fw.light};
    letter-spacing: -0.31px;

    color: ${({ theme }) => theme.c.white};
`;
