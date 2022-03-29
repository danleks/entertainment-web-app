import React from 'react';
import Section from 'components/organisms/Section/Section';
import { Wrapper } from './Home.styles';

const Home = () => {
    const detailsForTrending = {
        title: 'trending',
        isTrending: true,
        category: '',
        isBookmarked: false,
    };
    const detailsForRecommended = {
        title: 'recommended for you',
        isTrending: false,
        category: '',
        isBookmarked: false,
    };
    return (
        <Wrapper>
            <Section details={detailsForTrending} />
            <Section details={detailsForRecommended} />
        </Wrapper>
    );
};

export default Home;
