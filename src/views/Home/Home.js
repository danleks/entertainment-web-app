import React from 'react';
import Section from 'components/organisms/Section/Section';
import { useSection } from 'hooks/useSection';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Home = () => {
    const { getSectionProps } = useSection();
    return (
        <ViewWrapper>
            <Section {...getSectionProps(true)} />
            <Section {...getSectionProps()} />
        </ViewWrapper>
    );
};

export default Home;
