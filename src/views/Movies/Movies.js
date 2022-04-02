import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import Section from 'components/organisms/Section/Section';
import { useSection } from 'hooks/useSection';
import React from 'react';

const Movies = () => {
    const { getSectionProps } = useSection();
    return (
        <ViewWrapper>
            <Section {...getSectionProps()} />
        </ViewWrapper>
    );
};

export default Movies;
