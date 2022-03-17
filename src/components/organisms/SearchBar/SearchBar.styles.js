import styled from 'styled-components';
import SearchIcon from 'assets/icons/icon-search.svg';

export const InputStyles = styled.input`
    width: 25.7rem;
    border: none;
    padding: 2px 0;
    padding-left: 4rem;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fw.light};
    color: ${({ theme }) => theme.c.white};
    background-color: transparent;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 2.4rem;

    @media (min-width: 768px) {
        width: 38.1rem;
        padding-left: 5.6rem;
        font-size: 24px;
        background-size: 3.2rem;
    }

    &::placeholder {
        color: ${({ theme }) => theme.c.whiteTransparent50};
    }

    &:focus {
        outline: none;
    }
`;
