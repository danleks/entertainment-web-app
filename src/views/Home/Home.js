import React from 'react';
import Section from 'components/organisms/Section/Section';

const Home = () => {
    return (
        <>
            <Section trending title="trending" />
            <Section title="recommended for you" />
        </>
    );
};

export default Home;
