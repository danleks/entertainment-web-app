import React from 'react';
import { ReactComponent as BookmarkLogo } from 'assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/icon-play.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/icon-category-movie.svg';
import { BookmarkLogoWrapper, Details, DetailsWrapper, Wrapper, CategoryWrapper, Title, Play } from './Thumbnail.styles';

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
            <DetailsWrapper trending={trending}>
                <Details trending={trending}>
                    <span>2019</span>
                    <CategoryWrapper trending={trending}>
                        <MovieIcon />
                        Movie
                    </CategoryWrapper>
                    <span>PG</span>
                </Details>
                <Title trending={trending}>Beyond Earth</Title>
            </DetailsWrapper>
        </Wrapper>
    );
};

export default Thumbnail;
