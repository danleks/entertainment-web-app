import React from 'react';
import { ReactComponent as BookmarkLogo } from 'assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/icon-category-movie.svg';
import { BookmarkLogoWrapper, Details, DetailsWrapper, Wrapper, CategoryWrapper, Title } from './Thumbnail.style';

const Thumbnail = () => {
    return (
        <Wrapper>
            <BookmarkLogoWrapper>
                <BookmarkLogo />
            </BookmarkLogoWrapper>
            <DetailsWrapper>
                <Details>
                    <span>2019</span>
                    <CategoryWrapper>
                        <MovieIcon />
                        Movie
                    </CategoryWrapper>
                    <span>PG</span>
                </Details>
                <Title>Beyond Earth</Title>
            </DetailsWrapper>
        </Wrapper>
    );
};

export default Thumbnail;
