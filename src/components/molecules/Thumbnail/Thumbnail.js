import React from 'react';
import { ReactComponent as BookmarkLogo } from 'assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/icon-play.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/icon-category-movie.svg';
import { BookmarkLogoWrapper, Details, DetailsWrapper, Wrapper, CategoryWrapper, Title, Play } from './Thumbnail.styles';

const Thumbnail = ({ item: { title, thumbnail, year, category, rating, isBookmarked, isTrending } }) => {
    console.log(title);
    return (
        <Wrapper thumbnail={thumbnail} trending={isTrending}>
            <Play>
                <PlayIcon />
                <span>Play</span>
            </Play>
            <BookmarkLogoWrapper>
                <BookmarkLogo />
            </BookmarkLogoWrapper>
            <DetailsWrapper trending={isTrending}>
                <Details trending={isTrending}>
                    <span>{year}</span>
                    <CategoryWrapper trending={isTrending}>
                        <MovieIcon />
                        {category}
                    </CategoryWrapper>
                    <span>{rating}</span>
                </Details>
                <Title trending={isTrending}>{title}</Title>
            </DetailsWrapper>
        </Wrapper>
    );
};

export default Thumbnail;
