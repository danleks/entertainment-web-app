import React from 'react';
import { ReactComponent as BookmarkLogo } from 'assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/icon-play.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/icon-category-movie.svg';
import { BookmarkLogoWrapper, Details, DetailsWrapper, Wrapper, CategoryWrapper, Title, Play } from './Thumbnail.styles';

const Thumbnail = ({ trending, item: { title, thumbnail, year, category, rating, isBookmarked, isTrending } }) => {
    return (
        <Wrapper thumbnail={thumbnail} trending={trending}>
            <Play>
                <PlayIcon />
                <span>Play</span>
            </Play>
            <BookmarkLogoWrapper>
                <BookmarkLogo />
            </BookmarkLogoWrapper>
            <DetailsWrapper trending={trending}>
                <Details trending={trending}>
                    <span>{year}</span>
                    <CategoryWrapper trending={trending}>
                        <MovieIcon />
                        {category}
                    </CategoryWrapper>
                    <span>{rating}</span>
                </Details>
                <Title trending={trending}>{title}</Title>
            </DetailsWrapper>
        </Wrapper>
    );
};

export default Thumbnail;
