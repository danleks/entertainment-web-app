import styled from 'styled-components';

export const SectionWrapper = styled.section`
    padding-right: ${({ trending }) => (trending ? '' : '1.6rem')};
`;
