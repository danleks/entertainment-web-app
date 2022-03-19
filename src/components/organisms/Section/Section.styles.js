import styled from 'styled-components';

export const SectionWrapper = styled.section`
    padding-right: ${({ trending }) => (trending ? '' : '1.6rem')};
`;

export const MediaWrapper = styled.ul`
    display: grid;
    grid-template-columns: ${({ trending }) => (trending ? 'repeat(5, 1fr)' : 'repeat(2, 1fr)')};
    column-gap: ${({ trending }) => (trending ? '1.6rem' : '1.5rem')};
    row-gap: ${({ trending }) => (trending ? '' : '5.4rem')};
`;

export const MediaWrapperItem = styled.li`
    list-style: none;
`;
