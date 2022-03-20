import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-image: url(${({ thumbnail }) => (thumbnail.trending ? thumbnail.trending.small : thumbnail.regular.small)});
    background-size: cover;
    background-position: top;

    @media (min-width: 768px) {
        background-image: url(${({ thumbnail }) => (thumbnail.trending ? thumbnail.trending.large : thumbnail.regular.medium)});
    }

    @media (min-width: 1440px) {
        background-image: url(${({ thumbnail }) => (thumbnail.trending ? thumbnail.trending.large : thumbnail.regular.large)});
    }

    &:hover > div {
        opacity: 1;
    }
`;

export const BookmarkLogoWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.c.darkBlueTransparent};

    &:hover {
        cursor: pointer;
    }
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    bottom: ${({ trending }) => (trending ? '2rem' : '-4.5rem')};
    left: ${({ trending }) => (trending ? '1.7rem' : '0')};
    @media (min-width: 768px) {
        bottom: ${({ trending }) => (trending ? '2.4rem' : '-4.8rem')};
        left: ${({ trending }) => (trending ? '2.4rem' : '0')};
    }
`;

export const Details = styled.div`
    display: flex;

    span {
        font-size: 1.2rem;
        font-weight: ${({ theme }) => theme.fw.light};
        color: ${({ theme }) => theme.c.whiteTransparent};
        @media (min-width: 768px) {
            font-size: ${({ trending }) => (trending ? '15px' : '13px')};
        }
    }
`;

export const CategoryWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0 3px;
    ::after,
    ::before {
        content: '•';
        font-size: 2.2rem;
        line-height: 0;
        padding: 0 3px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.c.white};
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fw.medium};
    @media (min-width: 768px) {
        font-size: ${({ trending }) => (trending ? '24px' : '18px')};
    }
`;

export const Play = styled.div`
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11.7rem;
    height: 4.8rem;
    background-color: red;
    border-radius: 2.8rem;
    background-color: ${({ theme }) => theme.c.blackSemitransparent};
    transition: 0.2s opacity ease;
    cursor: pointer;
`;
