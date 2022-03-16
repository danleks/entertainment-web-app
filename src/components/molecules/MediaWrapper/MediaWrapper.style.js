import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: ${({ trending }) => (trending ? 'repeat(5, 1fr)' : 'repeat(2, 1fr)')};
    column-gap: ${({ trending }) => (trending ? '1.6rem' : '1.5rem')};
    row-gap: ${({ trending }) => (trending ? '' : '5.4rem')};
    list-style: none;
`;
