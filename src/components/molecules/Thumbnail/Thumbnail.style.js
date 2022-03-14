import styled from 'styled-components';

import img from '../../../assets/images/thumbnails/beyond-earth/regular/small.jpg';

export const Wrapper = styled.div`
    position: relative;
    width: 24rem;
    height: 14rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-image: url(${img});
    background-size: cover;
    background-position: 100% 100%;
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
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    bottom: 2rem;
    left: 1.7rem;
`;

export const Details = styled.div`
    display: flex;

    span {
        font-size: 1.2rem;
        font-weight: ${({ theme }) => theme.fw.light};
        color: ${({ theme }) => theme.c.whiteTransparent};
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
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fw.medium};
`;
