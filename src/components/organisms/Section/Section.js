import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import React, { useState, useEffect } from 'react';
import { MediaWrapper, SectionStyles, MediaItem } from './Section.styles';
import { data } from 'data/data';

const Section = ({ trending, title }) => {
    const [media, setMedia] = useState([]);
    useEffect(() => {
        setMedia(data);
    }, []);

    return (
        <SectionStyles trending={trending}>
            <SectionTitle trending={trending}>{title}</SectionTitle>
            <MediaWrapper trending={trending}>
                {media.map((item) => {
                    if (trending && item.isTrending) {
                        return (
                            <MediaItem key={item.title}>
                                <Thumbnail item={item} trending={item.isTrending} />
                            </MediaItem>
                        );
                    }
                    if (!trending && !item.isTrending) {
                        return (
                            <MediaItem key={item.title}>
                                <Thumbnail item={item} trending={item.isTrending} />
                            </MediaItem>
                        );
                    }
                })}
            </MediaWrapper>
        </SectionStyles>
    );
};

export default Section;
