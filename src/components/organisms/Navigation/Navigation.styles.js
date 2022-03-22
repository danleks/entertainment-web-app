import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationStyles = styled.nav`
    max-height: 96rem;
    background-color: ${({ theme }) => theme.c.semiDarkBlue};
    @media (min-width: 768px) {
        border-radius: 1rem;
    }
`;

export const NavigatonListStyles = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;
    list-style: none;

    @media (min-width: 1440px) {
        height: 100%;
        flex-direction: column;
        padding: 3.2rem 2.8rem;
    }

    & > li:nth-child(1) svg {
        width: 2.5rem;
        height: 2rem;

        @media (min-width: 1440px) {
            width: 3.2rem;
            height: 2.5rem;
        }
    }

    & > li:nth-child(2) {
        @media (min-width: 1440px) {
            flex: 1;
            padding-top: 7.5rem;
        }
    }
`;

export const LinksWrapperStyles = styled.ul`
    display: flex;
    gap: 2.4rem;
    list-style: none;

    @media (min-width: 1440px) {
        flex-direction: column;
    }

    & > li svg {
        width: 1.6rem;
        height: 1.6rem;

        @media (min-width: 1440px) {
            width: 2rem;
            height: 2rem;
        }
    }

    & .active path {
        fill: ${({ theme }) => theme.c.white};
    }

    & > li:hover path {
        fill: ${({ theme }) => theme.c.white};
    }
`;

export const AvatarStyles = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid ${({ theme }) => theme.c.white};
    border-radius: 50%;

    @media (min-width: 768px) {
        width: 3.2rem;
        height: 3.2rem;
    }

    @media (min-width: 1440px) {
        width: 4rem;
        height: 4rem;
    }
`;

export const NavLinkStyles = styled(NavLink)``;
