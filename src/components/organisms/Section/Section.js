import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import { MediaWrapper, SectionStyles, MediaItem } from './Section.styles';
import { useMedia } from 'hooks/useMedia';

const Section = ({ details: { title, isTrending, category, isBookmarked } }) => {
    const [media, setMedia] = useState([]);
    const { getMedia } = useMedia();
    useEffect(() => {
        (async () => {
            const media = (await getMedia(isTrending)) || [];
            setMedia(media);
        })();
    }, [getMedia, isTrending]);

    return (
        <SectionStyles trending={isTrending}>
            <SectionTitle trending={isTrending}>{title}</SectionTitle>
            <MediaWrapper trending={isTrending}>
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
