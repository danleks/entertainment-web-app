import React from 'react';
import Section from 'components/organisms/Section/Section';
import { Wrapper } from './Home.styles';
import { useSection } from 'hooks/useSection';

const Home = () => {
    const { getSectionProps } = useSection();
    return (
        <Wrapper>
            <Section {...getSectionProps(true)} />
            <Section {...getSectionProps()} />
        </Wrapper>
    );
};

export default Home;
