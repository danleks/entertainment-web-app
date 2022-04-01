import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import { MediaWrapper, SectionStyles, MediaItem } from './Section.styles';
import { useMedia } from 'hooks/useMedia';
import { SearchContext } from 'components/templates/MainTemplate';

const Section = ({ title, category: { trending, movie, tvseries, bookmark } }) => {
    const [media, setMedia] = useState([]);
    const { getMedia } = useMedia();
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        (async () => {
            const media = (await getMedia({ trending, movie, tvseries, bookmark, searchValue })) || [];
            setMedia(media);
        })();
    }, [getMedia, trending, movie, tvseries, bookmark, searchValue]);

    return (
        <SectionStyles trending={trending}>
            <SectionTitle trending={trending}>{title}</SectionTitle>
            <MediaWrapper trending={trending}>
                {media.map((item) => {
                    return (
                        <MediaItem key={item.title}>
                            <Thumbnail item={item} trending={item.isTrending} />
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
