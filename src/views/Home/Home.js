import React from 'react';
import Section from 'components/organisms/Section/Section';
import { Wrapper } from './Home.styles';

const Home = () => {
    const detailsForTrending = {
        title: 'recommended for you',
        category: {
            trending: true,
            movie: false,
            tvseries: false,
            bookmark: false,
        },
    };

    const detailsForRecommended = {
        title: 'recommended for you',
        category: {
            trending: false,
            movie: true,
            tvseries: true,
            bookmark: false,
        },
    };
    return (
        <Wrapper>
            <Section details={detailsForTrending} trending />
            <Section details={detailsForRecommended} />
        </Wrapper>
    );
};

export default Home;
