import { useLocation } from 'react-router-dom';

const TITLE = {
    trending: 'Trending',
    recommended: 'Recommended for you',
    movies: 'Movies',
    tvseries: 'TV-Series',
    bookmarks: {
        movies: 'Bookmarked Movies',
        tvseries: 'Bookmarked TV Series',
    },
};

export const useSection = () => {
    const { pathname } = useLocation();

    const getSectionProps = (trending = false, category = '') => {
        //TODO: rewrite to switch
        if (pathname === '/' && trending) {
            return {
                title: TITLE.trending,
                category: {
                    trending: true,
                    movie: false,
                    tvseries: false,
                    bookmark: false,
                },
            };
        }

        if (pathname === '/' && !trending) {
            return {
                title: TITLE.recommended,
                category: {
                    trending: false,
                    movie: true,
                    tvseries: true,
                    bookmark: false,
                },
            };
        }

        if (pathname === '/movies') {
            return {
                title: TITLE.movies,
                category: {
                    trending: false,
                    movie: true,
                    tvseries: false,
                    bookmark: false,
                },
            };
        }

        if (pathname === '/tv-series') {
            return {
                title: TITLE.tvseries,
                category: {
                    trending: false,
                    movie: false,
                    tvseries: true,
                    bookmark: false,
                },
            };
        }

        if (pathname === '/bookmarks') {
            return {
                title: TITLE.bookmarks[category.toLowerCase().split('-').join('')],
                category: {
                    trending: false,
                    movie: category === 'movies' ? true : false,
                    tvseries: category === 'tv-series' ? true : false,
                    bookmark: true,
                },
            };
        }
    };

    return {
        getSectionProps,
    };
};
