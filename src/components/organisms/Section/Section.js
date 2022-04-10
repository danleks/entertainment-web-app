import React, { useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import { MediaWrapper, SectionStyles, MediaItem } from './Section.styles';
import { useLocation } from 'react-router-dom';
import { AppContext } from 'providers/AppProvider';
import { getTitle } from 'helpers/getTitle';

const Section = ({ trending, bookmarkedMovie, bookmarkedTVSeries }) => {
    const [filteredMedia, setFilteredMedia] = useState([]);
    const { pathname } = useLocation();
    const { media, handleBookmarks, searchResult, inputVal } = useContext(AppContext);

    const handleFilteredMedia = useCallback(() => {
        let newMedia = media.filter((item) => {
            if (pathname === '/' && trending) {
                return item.isTrending;
            } else if (pathname === '/' && !trending) {
                return inputVal ? !item.isTrending && item.title.toLowerCase().includes(inputVal.toLowerCase()) : !item.isTrending;
            } else if (pathname === '/movies') {
                return item.category === 'Movie';
            } else if (pathname === '/tv-series') {
                return item.category === 'TV Series';
            } else if (pathname === '/bookmarks' && bookmarkedMovie) {
                return item.isBookmarked && item.category === 'Movie';
            } else if (pathname === '/bookmarks' && bookmarkedTVSeries) {
                return item.isBookmarked && item.category === 'TV Series';
            }
        });

        setFilteredMedia(newMedia);
    }, [media, trending, bookmarkedMovie, bookmarkedTVSeries, pathname, inputVal]);

    useEffect(() => {
        handleFilteredMedia();
    }, [handleFilteredMedia]);

    return (
        <SectionStyles trending={trending && pathname === '/'}>
            <SectionTitle trending={trending && pathname === '/'}>
                {searchResult.length > 0
                    ? `Found ${searchResult.length} result${searchResult.length > 1 ? 's' : ''} for ‘${inputVal}’`
                    : getTitle(pathname, trending, bookmarkedMovie, bookmarkedTVSeries)}
            </SectionTitle>
            <MediaWrapper trending={trending && pathname === '/'}>
                {filteredMedia.map((item) => {
                    return (
                        <MediaItem key={item.title}>
                            <Thumbnail handleBookmarks={handleBookmarks} item={item} trending={trending && pathname === '/'} />
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
