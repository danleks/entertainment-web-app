import styled from 'styled-components';
import SearchIcon from 'assets/icons/icon-search.svg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    width: 25.7rem;

    @media (min-width: 768px) {
        width: 38.1rem;
        gap: 2.4rem;
    }
`;

export const InputStyles = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid transparent;
    padding: 1rem 0;
    padding-bottom: 1rem;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fw.light};
    color: ${({ theme }) => theme.c.white};
    background-color: transparent;

    @media (min-width: 768px) {
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
