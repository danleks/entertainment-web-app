import React from 'react';
import { ReactComponent as BookmarkSvg } from 'assets/icons/icon-nav-bookmark.svg';
import { ReactComponent as HomeSvg } from 'assets/icons/icon-nav-home.svg';
import { ReactComponent as MoviesSvg } from 'assets/icons/icon-nav-movies.svg';
import { ReactComponent as SeriesSvg } from 'assets/icons/icon-nav-tv-series.svg';
import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import avatar from 'assets/icons/image-avatar.png';
import { NavigationStyles, NavigatonListStyles, LinksWrapperStyles, AvatarStyles, NavLinkStyles } from './Navigation.styles';

const Navigation = () => {
    return (
        <NavigationStyles>
            <NavigatonListStyles>
                <li>
                    <NavLinkStyles to="/" title="home">
                        <LogoSvg />
                    </NavLinkStyles>
                </li>
                <li>
                    <LinksWrapperStyles>
                        <li>
                            <NavLinkStyles to="/" title="home">
                                <HomeSvg />
                            </NavLinkStyles>
                        </li>
                        <li>
                            <NavLinkStyles to="/movies" title="movies" data-testid="movies">
                                <MoviesSvg />
                            </NavLinkStyles>
                        </li>
                        <li>
                            <NavLinkStyles to="/tv-series" title="tv-series">
                                <SeriesSvg />
                            </NavLinkStyles>
                        </li>
                        <li>
                            <NavLinkStyles to="/bookmarks" title="bookmarks">
                                <BookmarkSvg />
                            </NavLinkStyles>
                        </li>
                    </LinksWrapperStyles>
                </li>
                <li>
                    <AvatarStyles src={avatar} alt="avatar" />
                </li>
            </NavigatonListStyles>
        </NavigationStyles>
    );
};

export default Navigation;
