import React from 'react';
import { ReactComponent as BookmarkLogo } from 'assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/icon-play.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/icon-category-movie.svg';
import { BookmarkLogoWrapper, Details, DetailsWrapper, Wrapper, CategoryWrapper, Title, Play } from './Thumbnail.style';

const Thumbnail = ({ trending }) => {
    return (
        <Wrapper trending={trending}>
            <Play>
                <PlayIcon />
                <span>Play</span>
            </Play>
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
