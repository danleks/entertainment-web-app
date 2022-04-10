import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BookmarkLogoEmpty } from 'assets/icons/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkLogoFull } from 'assets/icons/icon-bookmark-full.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/icon-play.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/icon-category-movie.svg';
import { BookmarkLogoWrapper, Details, DetailsWrapper, Wrapper, CategoryWrapper, Title, Play } from './Thumbnail.styles';
import { THUMBNAIL_SHAPE } from 'types/thumbnailTypes';
import { AppContext } from 'providers/AppProvider';

const Thumbnail = ({ item, trending }) => {
    const { handleBookmarks } = useContext(AppContext);

    return (
        <Wrapper thumbnail={item.thumbnail} trending={trending}>
            <Play>
                <PlayIcon />
                <span>Play</span>
            </Play>
            <BookmarkLogoWrapper onClick={() => handleBookmarks(item)}>
                {item.isBookmarked ? <BookmarkLogoFull /> : <BookmarkLogoEmpty />}
            </BookmarkLogoWrapper>
            <DetailsWrapper trending={trending}>
                <Details trending={trending}>
                    <span>{item.year}</span>
                    <CategoryWrapper trending={trending}>
                        <MovieIcon />
                        {item.category}
                    </CategoryWrapper>
                    <span>{item.rating}</span>
                </Details>
                <Title trending={trending}>{item.title}</Title>
            </DetailsWrapper>
        </Wrapper>
    );
};

Thumbnail.propTypes = {
    item: PropTypes.shape(THUMBNAIL_SHAPE),
};

export default Thumbnail;
