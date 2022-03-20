import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import React from 'react';
import { MediaWrapper, SectionWrapper, MediaWrapperItem } from './Section.styles';
import { data } from 'data/data';

const Section = ({ trending, title }) => {
    return (
        <SectionWrapper trending={trending}>
            <SectionTitle trending={trending}>{title}</SectionTitle>
            <MediaWrapper trending={trending}>
                {data.map((item) => {
                    if (item.isTrending) {
                        return (
                            <MediaWrapperItem key={item.title}>
                                <Thumbnail trending={trending} />
                            </MediaWrapperItem>
                        );
                    } else {
                        <MediaWrapperItem>
                            <Thumbnail />
                        </MediaWrapperItem>;
                    }
                })}
            </MediaWrapper>
        </SectionWrapper>
    );
};

export default Section;
