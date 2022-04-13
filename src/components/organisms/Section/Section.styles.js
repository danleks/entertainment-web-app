import styled from 'styled-components';

export const SectionStyles = styled.section`
    overflow: hidden;
    ${'' /* overflow-x: ${({ trending }) => (trending ? 'scroll' : 'unset')}; */}
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
    --rowGapBasic: 6rem;
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
        --rowGapBasic: 7.6rem;
        --colGapTrending: 4rem;
    }

    @media (min-width: 1440px) {
        --colBasic: 4;
        --widthBasic: 28rem;
        --heightBasic: 17.4rem;
        --colGapBasic: 4rem;
        --rowGapBasic: 8.4rem;
    }
`;

export const MediaItem = styled.li`
    list-style: none;
`;
