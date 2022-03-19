import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import React from 'react';
import { MediaWrapper, SectionWrapper, MediaWrapperItem } from './Section.styles';

const Section = ({ trending, title }) => {
    return (
        <SectionWrapper trending={trending}>
            <SectionTitle trending={trending}>{title}</SectionTitle>
            <MediaWrapper trending={trending}>
                <MediaWrapperItem>
                    <Thumbnail trending={trending} />
                </MediaWrapperItem>
                <MediaWrapperItem>
                    <Thumbnail />
                </MediaWrapperItem>
                <MediaWrapperItem>
                    <Thumbnail />
                </MediaWrapperItem>
                <MediaWrapperItem>
                    <Thumbnail />
                </MediaWrapperItem>
            </MediaWrapper>
        </SectionWrapper>
    );
};

export default Section;
