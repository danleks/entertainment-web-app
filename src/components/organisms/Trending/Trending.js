import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { MediaWrapper } from 'components/molecules/MediaWrapper/MediaWrapper';
import React from 'react';

const Trending = () => {
    return (
        <section>
            <SectionTitle>Trending</SectionTitle>
            <MediaWrapper>
                <li>
                    <Thumbnail trending />
                </li>
            </MediaWrapper>
        </section>
    );
};

export default Trending;
