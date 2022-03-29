import styled from 'styled-components';
import SearchIcon from 'assets/icons/icon-search.svg';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    gap: 1.6rem;
    width: 100%;

    @media (min-width: 768px) {
        gap: 2.4rem;
    }
`;

export const InputStyles = styled.input`
    width: 27.7rem;
    border: none;
    border-bottom: 1px solid transparent;
    padding: 1rem 0;
    padding-bottom: 1rem;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fw.light};
    color: ${({ theme }) => theme.c.white};
    background-color: transparent;
    caret-color: ${({ theme }) => theme.c.red};

    @media (min-width: 768px) {
        width: 38.1rem;
        font-size: 24px;
        background-size: 3.2rem;
    }

    &::placeholder {
        color: ${({ theme }) => theme.c.whiteTransparent50};
    }

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.c.greyishBlue};
    }
`;

export const SearchIconStyles = styled.span`
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 2.4rem;
`;

export const ResultsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3rem;
    transform: translateY(100%);
    z-index: 1;
    overflow-y: scroll;
    background: ${({ theme }) => theme.c.darkBlue};

    h2 {
        font-size: 13px;
        font-weight: ${({ theme }) => theme.fw.light};
        color: ${({ theme }) => theme.c.whiteTransparent};
    }
`;

export const ResultsList = styled.ul`
    list-style: none;
    @media (min-width: 768px) {
        padding-top: 1rem;
    }
`;

export const ResultsItem = styled.li`
    padding: 1rem 0;
    color: ${({ theme }) => theme.c.white};
    background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.c.greyishBlue : '')};
`;
