import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationStyles = styled.nav`
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

    & > li:first-child svg {
        width: 2.5rem;
        height: 2rem;
    }
`;

export const LinksWrapperStyles = styled.ul`
    display: flex;
    gap: 2.4rem;
    list-style: none;

    & > li svg {
        width: 1.6rem;
        height: 1.6rem;
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
`;

export const NavLinkStyles = styled(NavLink)``;
