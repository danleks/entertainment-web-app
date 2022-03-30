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

const Bookmarks = () => {
    const details = {
        title: 'bookmarks',
        category: {
            trending: false,
            movie: false,
            tvseries: false,
            bookmark: true,
        },
    };
    return (
        <Wrapper>
            <Section details={details} />
        </Wrapper>
    );
};

export default Bookmarks;
