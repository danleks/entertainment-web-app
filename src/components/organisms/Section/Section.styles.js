import styled from 'styled-components';

export const SectionWrapper = styled.section`
    padding-right: ${({ trending }) => (trending ? '' : '1.6rem')};
`;

export const MediaWrapper = styled.ul`
    --colBasic: 2;
    --colTrending: 5;
    --widthBasic: 16.4rem;
    --widthTrending: 24rem;
    --heightBasic: 11rem;
    --heightTrending: 14rem;
    --colGapBasic: 1.5rem;
    --colGapTrending: 1.6rem;
    --rowGapBasic: 5.4rem;
    --rowGapTrending: 0;

    display: grid;
    grid-template-columns: ${({ trending }) =>
        trending ? `repeat(var(--colTrending), var(--widthTrending))` : `repeat(var(--colBasic), var(--widthBasic))`};
    grid-template-rows: ${({ trending }) => (trending ? `var(--heightTrending)` : `var(--heightBasic)`)};
    grid-auto-rows: ${({ trending }) => (trending ? `var(--heightTrending)` : `var(--heightBasic)`)};
    column-gap: ${({ trending }) => (trending ? `var(--colGapTrending)` : `var(--colGapBasic)`)};
    row-gap: ${({ trending }) => (trending ? `var(--rowGapTrending)` : `var(--rowGapBasic)`)};

    @media (min-width: 768px) {
        --colBasic: 3;
        --widthBasic: 22rem;
        --widthTrending: 47rem;
        --heightBasic: 14rem;
        --heightTrending: 23rem;
        --colGapBasic: 3rem;
        --rowGapBasic: 6.7rem;
        --colGapTrending: 4rem;
    }
`;

export const MediaWrapperItem = styled.li`
    list-style: none;
`;
