import Section from 'components/organisms/Section/Section';
import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const TVSeries = ({ media }) => {
    const movies = media.filter((item) => item.category === 'TV Series');

    return (
        <ViewWrapper>
            <Section media={media} />
        </ViewWrapper>
    );
};

export default TVSeries;
