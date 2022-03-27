import PropTypes from 'prop-types';

export const THUMBNAIL_SHAPE = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
        trending: PropTypes.shape({
            small: PropTypes.string.isRequired,
            large: PropTypes.string.isRequired,
        }),
        regular: PropTypes.shape({
            small: PropTypes.string.isRequired,
            medium: PropTypes.string.isRequired,
            large: PropTypes.string.isRequired,
        }).isRequired,
    }),
    year: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool,
    isTrending: PropTypes.bool.isRequired,
};
