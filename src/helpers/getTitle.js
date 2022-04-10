export const getTitle = (pathname, trending, bookmarkedMovie, bookmarkedTVSeries) => {
    if (trending) {
        return 'Trending';
    } else if (pathname === '/' && !trending) {
        return 'Recommended for you';
    } else if (pathname === '/movies') {
        return 'Movies';
    } else if (pathname === '/tv-series') {
        return 'TV Series';
    } else if (pathname === '/bookmarks' && bookmarkedMovie) {
        return 'Bookmarked Movies';
    } else if (pathname === '/bookmarks' && bookmarkedTVSeries) {
        return 'Bookmarked TV Series';
    }
};
