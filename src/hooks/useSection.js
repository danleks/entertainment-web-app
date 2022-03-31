import { useLocation } from 'react-router-dom';

export const useSection = () => {
    const { pathname } = useLocation();

    const getSectionProps = (trending) => {
        //TODO: rewrite to switch
        const title = pathname.split('/');
        if (pathname === '/' && trending) {
            return {
                title: 'trending',
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
                title: 'recommended for you',
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
                title,
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
                title,
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
                title,
                category: {
                    trending: false,
                    movie: false,
                    tvseries: false,
                    bookmark: true,
                },
            };
        }
    };

    return {
        getSectionProps,
    };
};
