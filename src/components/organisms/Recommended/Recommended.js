import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import React from 'react';
import MediaWrapper from 'components/molecules/MediaWrapper/MediaWrapper';
import { SectionWrapper } from 'components/molecules/Section/Section.styles';

const Recommended = () => {
    return (
        <SectionWrapper>
            <SectionTitle>Recommended for you</SectionTitle>
            <MediaWrapper>
                <li>
                    <Thumbnail />
                </li>
                <li>
                    <Thumbnail />
                </li>
                <li>
                    <Thumbnail />
                </li>
                <li>
                    <Thumbnail />
                </li>
            </MediaWrapper>
        </SectionWrapper>
    );
};

export default Recommended;
