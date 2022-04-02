import Section from 'components/organisms/Section/Section';
import React from 'react';
import { useSection } from 'hooks/useSection';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Bookmarks = () => {
    const { getSectionProps } = useSection();

    return (
        <ViewWrapper>
            <Section {...getSectionProps()} />
        </ViewWrapper>
    );
};

export default Bookmarks;
