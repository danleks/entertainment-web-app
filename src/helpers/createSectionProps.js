export const createSectionProps = (title, trending = false, movie = false, tvseries = false, bookmark = false) => {
    return {
        title,
        category: {
            trending,
            movie,
            tvseries,
            bookmark,
        },
    };
};
