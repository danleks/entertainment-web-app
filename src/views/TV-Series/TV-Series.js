import Section from 'components/organisms/Section/Section';
import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { AppContext } from 'providers/AppProvider';

const TVSeries = () => {
    const { media } = useContext(AppContext);
    const movies = media.filter((item) => item.category === 'TV Series');

    return (
        <ViewWrapper>
            <Section media={movies} />
        </ViewWrapper>
    );
};

export default TVSeries;
