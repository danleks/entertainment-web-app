import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import MediaWrapper from 'components/molecules/MediaWrapper/MediaWrapper';
import { SectionWrapper } from 'components/molecules/Section/Section.styles';
import React from 'react';

const Trending = () => {
    return (
        <SectionWrapper trending>
            <SectionTitle trending>Trending</SectionTitle>
            <MediaWrapper trending>
                <li>
                    <Thumbnail trending />
                </li>
                <li>
                    <Thumbnail trending />
                </li>
            </MediaWrapper>
        </SectionWrapper>
    );
};

export default Trending;
