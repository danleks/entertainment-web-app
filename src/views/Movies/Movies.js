import Section from 'components/organisms/Section/Section';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    --gap: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    @media (min-width: 768px) {
        --gap: 3.9rem;
    }

    @media (min-width: 1440px) {
        --gap: 4rem;
    }
`;

const Movies = () => {
    const details = {
        title: 'movies',
        category: {
            trending: false,
            movie: true,
            tvseries: false,
            bookmark: false,
        },
    };
    return (
        <Wrapper>
            <Section details={details} />
        </Wrapper>
    );
};

export default Movies;
