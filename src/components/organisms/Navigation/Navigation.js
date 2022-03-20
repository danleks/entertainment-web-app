import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as BookmarkSvg } from 'assets/icons/icon-nav-bookmark.svg';
import { ReactComponent as HomeSvg } from 'assets/icons/icon-nav-home.svg';
import { ReactComponent as MoviesSvg } from 'assets/icons/icon-nav-movies.svg';
import { ReactComponent as SeriesSvg } from 'assets/icons/icon-nav-tv-series.svg';
import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import avatar from 'assets/icons/image-avatar.png';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <LogoSvg />
                    </NavLink>
                </li>
                <li>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <HomeSvg />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">
                                <MoviesSvg />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/tv-series">
                                <SeriesSvg />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bookmarks">
                                <BookmarkSvg />
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src={avatar} alt="avatar" />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
