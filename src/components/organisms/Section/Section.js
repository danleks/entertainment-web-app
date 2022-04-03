import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import { MediaWrapper, SectionStyles, MediaItem } from './Section.styles';
import { useMedia } from 'hooks/useMedia';
import { SearchContext } from 'providers/SearchProvider';
import { useLocation } from 'react-router-dom';

const Section = (props) => {
    const [media, setMedia] = useState([]);
    const { getMedia } = useMedia();
    const { searchValue } = useContext(SearchContext);

    const { pathname } = useLocation();
    const { isTrending } = props;

    useEffect(() => {
        (async () => {
            const media = (await getMedia(props, searchValue)) || [];
            setMedia(media);
        })();
    }, [getMedia, props, searchValue]);

    // TODO: move to helpers folder
    const getTitle = (props) => {
        if (props.isTrending) {
            return 'Trending';
        } else if (props.notIsTrending) {
            return 'Recommended for you';
        } else if (props.movie) {
            return 'Movies';
        } else if (props.tvseries) {
            return 'TV Series';
        } else if (props.bookmark) {
            return 'Bookmarked Movies';
        }
    };

    const handleBookmarks = (item) => {
        // TODO:
        item.isBookmarked = !item.isBookmarked;
        setMedia([...media, item]);
    };

    return (
        <SectionStyles trending={isTrending && pathname === '/'}>
            <SectionTitle trending={isTrending && pathname === '/'}>
                {searchValue ? `Found ${media.length} result${media.length > 1 ? 's' : ''} for ‘${searchValue}’` : getTitle(props)}
            </SectionTitle>
            <MediaWrapper trending={isTrending && pathname === '/'}>
                {media.map((item) => {
                    return (
                        <MediaItem key={item.title}>
                            <Thumbnail handleBookmarks={handleBookmarks} item={item} trending={isTrending && pathname === '/'} />
                        </MediaItem>
                    );
                })}
            </MediaWrapper>
        </SectionStyles>
    );
};

Section.propTypes = {
    trending: PropTypes.bool,
    title: PropTypes.string.isRequired,
};

export default Section;
