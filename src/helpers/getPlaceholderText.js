export const getPlaceholderText = (pathname) => {
    return (
        (pathname === '/' && 'Search for movies or TV series') ||
        (pathname === '/movies' && 'Search for movies') ||
        (pathname === '/tv-series' && 'Search for TV series') ||
        (pathname === '/bookmarks' && 'Search for bookmarked shows')
    );
};
