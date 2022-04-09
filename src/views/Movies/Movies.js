import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import Section from 'components/organisms/Section/Section';
import React, { useContext } from 'react';
import { AppContext } from 'providers/AppProvider';

const Movies = () => {
    const { media } = useContext(AppContext);
    const movies = media.filter((item) => item.category === 'Movie');

    return (
        <ViewWrapper>
            <Section media={movies} />
        </ViewWrapper>
    );
};

export default Movies;
