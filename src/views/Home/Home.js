import React from 'react';
import Section from 'components/organisms/Section/Section';
import { Wrapper } from './Home.styles';

const Home = () => {
    return (
        <Wrapper>
            <Section trending title="trending" />
            <Section title="recommended for you" />
        </Wrapper>
    );
};

export default Home;
